import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import core from '../src/core'
import {Switch, Image, LoadPicture, Text, View} from '../src/wrapper'
import Timetable from '../src/components/timetable'
import Time from '../src/components/time'
import Departure from '../src/components/departure'
import RoundButton from '../src/components/roundButton'
import LocationPrompt from '../src/components/locationPrompt'

storiesOf('Welcome', module).add('Infogare', () =>
    <View>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Infogare</Text>
        <Text>Ce storybook permet de voir et de tester les composants de l'application Infogare</Text>
        <Image style={{width:300, height:250}} source={LoadPicture('logo')} />
        <RoundButton text='⚙' color='#0d5da6' fontColor='#FFFFFF' onClick={() => console.log('You clicked on ⚙')}/>
    </View>)

storiesOf('Full timetable', module).add('Malesherbes', () =>
    <View style={{width:800, height:600, position:'absolute'}}>
        <Timetable suggestStations={()=>{}}
                   displayLocationPrompt={()=>{}}
                   timetable={{departures:[{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'05:23',
                           stops:['Boigneville','Buno‑Gironville','Maisse','Boutigny','La Ferté‑Alais','Ballancourt','Mennecy','Moulin‑Galant','Corbeil‑Essonnes','Le Bras‑de‑Fer','Evry‑Courcouronnes','Orangis‑Bois‑de‑l\'Epine','Grigny‑Centre','Juvisy','Vigneux‑sur‑Seine','Villeneuve‑St‑Georges','Maisons‑Alfort‑Alfortv.','Gare‑de‑Lyon‑RER‑D','Châtelet‑les‑Halles','Gare‑du‑Nord','Stade‑France‑St‑Denis','St‑Denis','Pierrefitte‑Stains','Garges‑Sarcelles','Villiers‑le‑Bel‑Gonesse'],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'05:53',
                           stops:['Boigneville','Buno‑Gironville','Maisse','Boutigny','La Ferté‑Alais','Ballancourt','Mennecy','Moulin‑Galant','Corbeil‑Essonnes','Le Bras‑de‑Fer','Evry‑Courcouronnes','Orangis‑Bois‑de‑l\'Epine','Grigny‑Centre','Juvisy','Vigneux‑sur‑Seine','Villeneuve‑St‑Georges','Maisons‑Alfort‑Alfortv.','Gare‑de‑Lyon‑RER‑D','Châtelet‑les‑Halles','Gare‑du‑Nord','Stade‑France‑St‑Denis'],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'06:23',
                           stops:[],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'06:38',
                           stops:[],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'06:53',
                           stops:[],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'07:08',
                           stops:[],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'07:23',
                           stops:[],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'07:38',
                           stops:[],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'07:53',
                           stops:[],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'
                       },{mode:'RER',
                           name:'D',
                           direction:'Villiers‑Le‑Bel‑Gonesse',
                           number:'VUPE',
                           time:'08:23',
                           stops:[],
                           fontColor:'FFFFFF',
                           platform: '2',
                           color:'5E9620'}]}} parent={{state:{}}}
                   updateHightlightedComponent={()=>{}}/>
    </View>)

storiesOf('Departure', module)
    .add('Rouen Rive Droite', () =>
        <Departure height={300} num={1} detailed={true} odd={false} detailsRow={1 <= 1 ? 1 + 1 : undefined} parent={{}} rowHeight={280} rowWidth={320} mustBePadded={false}
                   departure={{
                       direction:'Rouen-Rive droite',
                       number:'13107',
                       platform:'2',
                       time:'12:19',
                       mode:'Intercités',
                       stops:['Mantes-la-jolie', 'Vernon', 'Gaillon-Aubevoie', 'Val de Reuil', 'Oissel', 'Rouen-Rive droite']}}/>)
    .add('Montereau', () =>
        <Departure height={300} num={0} detailed={true} odd={true} detailsRow={0 <= 1 ? 0 + 1 : undefined} parent={{}} rowHeight={280} rowWidth={320} mustBePadded={true}
                   departure={{
                       direction:'Montereau',
                       platform:'K',
                       time:'10:19',
                       mode:'Transilien',
                       name:'R',
                       number:'KUMO',
                       color:'e4b4d1',
                       stops:['Melun', 'Bois-le-Roi', 'Fontainebleau-Avon', 'Moret-Veneux les sablons', 'Saint-Mammès', 'Montereau']}}/>)
    .add('Nevers (petit)', () =>
        <Departure height={300} num={3} detailed={false} odd={true} detailsRow={3 <= 1 ? 3 + 1 : undefined} parent={{}} rowHeight={280} rowWidth={320} mustBePadded={false}
                   departure={{
                       direction:'Nevers',
                       number:'13107',
                       platform:'2',
                       time:'15:23',
                       mode:'Intercités',
                       color:'e4b4d1',
                       stops:[]}}/>)

storiesOf('Time', module).add('Time', () => <Time/>)

storiesOf('LocationPrompt', module).add('LocationPrompt', () =>
    <LocationPrompt favoriteStations={[]} displayLocationPrompt={true} suggestStations={station => core.suggestStations(station)}/>)

let viewButton = true
storiesOf('RoundButton', module).add('Refresh', () =>
    <View style={{width:600, height:600, position:'absolute'}}>
        <RoundButton text='↻' color='#dfc81f' fontColor='#FFFFFF' onClick={() => console.log('You clicked on ↻')}/>
    </View>).add('Two buttons', () =>
    <View style={{width:400, height:400, position:'absolute'}}>
        <RoundButton text='⚙' color='#0d5da6' fontColor='#FFFFFF' onClick={() => console.log('You clicked on ⚙')}/>
        <RoundButton text='↻' color='#dfc81f' fontColor='#FFFFFF' onClick={() => console.log('You clicked on ↻')}/>
    </View>).add('Image', () =>
    <View style={{width:600, height:600, position:'absolute'}}>
        <RoundButton align='left top' image='walk' color='#04396d' fontColor='#FFFFFF'
                     onClick={() => console.log('You clicked on walk')}/>
    </View>).add('Switch display', () =>  <View style={{width:600, height:600, position:'absolute'}}>
    <Switch value={viewButton} onValueChange={() => viewButton = !viewButton}/>
    <RoundButton align='left top' text='switch' color='#04396d' fontColor='#FFFFFF' visible={viewButton}
                 onClick={() => viewButton = !viewButton}/>
</View>).add('Long press', () =>
    <View style={{width:800, height:800, position:'absolute'}}>
        <RoundButton align='left top' longPressText='⚙' longPressColor='#0d5da6' longPressFontColor='#FFFFFF' text='↻'
                     color='#dfc81f' fontColor='#FFFFFF' onClick={() => console.log('You clicked on ↻')}
                     onLongClick={() => console.log('You clicked on ⚙')}/>
    </View>)