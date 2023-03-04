import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import NoALongs from './src/components/vista_1/NoALongs';
import WeightProm from './src/components/vista_2/WeightProm';
import PromForraje from './src/components/vista_3/PromForraje';
import Report2 from './src/components/vista_4/Report2';

import backimg from './assets/back.png';

export default function App() {
  const [ op, setOP ] =                 useState(0);

  const [ numberCattle, setCattle ] =   useState(0);
  const [ metros2, setMetros2 ] =       useState(0);

  const [ forrajeVerde, setForraje ] =  useState(0);
  const [ freeGrazing, setGrazing ] =   useState(0);

  const [ animalWeight, setWeight ] =   useState(0);

  switch(op){
    case 0:
      return (
        <ImageBackground source={backimg} resizeMode="cover" style={styles.container}>
          <NoALongs setOP={setOP} setAN={setCattle} setM2={setMetros2}/>
          <StatusBar style="auto" />
        </ImageBackground>)
    case 1:
      return (
      <ImageBackground source={backimg} resizeMode="cover" style={styles.container}>
        <WeightProm setOP={setOP} setWA={setWeight} NA={numberCattle} />
        <StatusBar style="auto" />
      </ImageBackground>)
    case 2:
      return (
      <ImageBackground source={backimg} resizeMode="cover" style={styles.container}>
        <PromForraje setOP={setOP} setFV={setForraje} setPL={setGrazing}/>
        <StatusBar style="auto" />
      </ImageBackground>)
    case 3:
      console.log(op, numberCattle, metros2, forrajeVerde, freeGrazing, animalWeight);

      //******************************************** */
      let cvfva = (forrajeVerde)*0.125; 
      let constotfv_dia = cvfva*animalWeight;
      let unk = forrajeVerde*metros2;
      let unk2 = unk*numberCattle;
      let dias_carga = unk/constotfv_dia;

      let m2_dia = constotfv_dia/forrajeVerde ;
      let rela = metros2/Math.sqrt(m2_dia);

      //******************************************** */
      let dias_tolerancia = dias_carga-(dias_carga*0.2);

      let longLotes = metros2/dias_carga;
      let numLotes = metros2/longLotes;

      let avance_dia = Math.sqrt(m2_dia)/rela;

      return (
      <ImageBackground source={backimg} resizeMode="cover" style={styles.container}>
        <Report2 
          diasTolerancia={dias_tolerancia} 
          numLotes={numLotes} 
          longLotes={longLotes.toFixed(2)}
          avanceDia={avance_dia.toFixed(2)}
          m4h={avance_dia.toFixed(2)/3}
        />
      </ImageBackground>
      )
    default: 
      break;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#fff',
  },
});
