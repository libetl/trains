import {get, post} from 'axios'
import capitalize from '../operations/capitalize'
import moment from 'moment'

const getStation = stationName =>
    get(`https://www.nouveau.sncf.com/api/iv/1.0/util/rechercherListeEmplacementsCommencantPar?typeEmplacement=ZONE_ARRET&libelle=${stationName}&indicateurFiltreModes=true&Nbemplacement=5&indicateurReponseGaresSecondaires=true`)

const extractstopAreaName = response =>
    response.data.reponseRechercherListeEmplacementsCommencantPar.reponse.listeResultats.resultat[0].donnees.listeEmplacements.emplacement[0].code
const extractDepatures = response => response.data.reponseRechercherProchainsDeparts.reponse.listeResultats.resultat[0].donnees.listeHoraires.horaire
const extractJourney = response => response.data.reponseRechercherListeCirculations.reponse.listeResultats.resultat[0].donnees.listeCirculations.circulation[0]

const departures = stopAreaName => get(`https://www.nouveau.sncf.com/api/iv/1.0/infoVoy/rechercherProchainsDeparts?codeZoneArret=${stopAreaName}&indicateurReponseGaresSecondaires=true`)
const findJourney = ({baseDepartures, stationsAreas:{apiData:{stopAreaName}}}) =>
    Promise.all(
        baseDepartures.slice(0, 2).map(departure =>
            get(`https://www.nouveau.sncf.com/api/iv/1.0/infoVoy/rechercherListeCirculations?numero=${departure.savedNumber}&dateCirculation=${moment(departure.stop_date_time.base_departure_date_time, 'YYYY-MM-DDTHH:mm:ssZ').format('YYYY-MM-DD')}&codeZoneArret=${stopAreaName}&typeHoraire=TEMPS_REEL&codeZoneArretDepart&codeZoneArretArrivee&compositions=1&codeCirculation`)
                .then(response => extractJourney(response))
                .then(journey => journey.listeArretsDesserte.arret.map(arret => arret.emplacement.libelle))
                .then(stops => {return {savedNumber:departure.savedNumber, dataToDisplay:{stops}}})))

const baseDepartures = ({apiData}) =>
    departures(apiData.stopAreaName)
        .then(response => extractDepatures(response))
        .then(horaires => horaires.map(horaire => {return {
            savedNumber:parseInt(horaire.arret.depart.numeroCirculation),
            stop_date_time: {
                base_departure_date_time: horaire.arret.depart.dateHeureReelle,
            },
            dataToDisplay: {
                mode: (horaire.circulation.mode||{typeLibelle:''}).typeLibelle.replace(/\s*Train\s*/,'').split(' ')[0],
                name: '',
                direction: capitalize(horaire.circulation.destination.libelle),
                number: horaire.arret.depart.numeroCirculation,
                time: moment(horaire.arret.depart.dateHeureReelle, 'YYYY-MM-DDTHH:mm:ssZ').format('HH:mm'),
                platform: horaire.arret.voie.numeroPrevision,
                stops: []}}}))

const stationSearch = (coords, {token, nestedStationSearch}) => {
    const stationsAreas = nestedStationSearch(coords, {token})
    const {stationCoords, stationName, stations} = stationsAreas['nestedSearchData']
    return getStation(stationName).then(response => extractstopAreaName(response))
        .then(stopAreaName => {return {apiData:{stopAreaName}, stations, ...stationsAreas, stationCoords, stationName:stationsAreas.stationName}})
}

export default {
    stationSearch, baseDepartures, feed:[findJourney],
    metadata: {features:['departures', 'stations', 'platforms', 'journeys'], everywhere: true,
        ratings:{relevancy: 5, reliability: 3, sustainability: 1}}}