import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import backimg from '../../assets/back.png';

import NoALongs from "../components/vista_1/NoALongs";
import WeightProm from "../components/vista_2/WeightProm";
import PromForraje from "../components/vista_3/PromForraje";
import Report2 from "../components/vista_4/Report2";

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
	const [ numberCattle, setCattle ] =   useState(0);
	const [ metros2, setMetros2 ] =       useState(0);

	const [ forrajeVerde, setForraje ] =  useState(0);
	const [ freeGrazing, setGrazing ] =   useState(0);

	const [ animalWeight, setWeight ] =   useState(0);

	const report = () => {
		console.log( numberCattle, metros2, forrajeVerde, freeGrazing, animalWeight);

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
			<Report2 
				diasTolerancia={dias_tolerancia} 
				numLotes={numLotes} 
				longLotes={longLotes.toFixed(2)}
				avanceDia={avance_dia.toFixed(2)}
				m4h={avance_dia.toFixed(2)/3}
			/>
		);
	}


	return (
		<Stack.Navigator >
				<Stack.Screen name="first" options={{ title: '', headerShown: false,}} >
					{e=><NoALongs nav={e.navigation} setAN={setCattle} setM2={setMetros2}/>}
				</Stack.Screen>
				<Stack.Screen name="second" options={{ 
					title: 'Pesos', 
					headerStyle: {backgroundColor: '#E2FFE2',},
					headerShadowVisible: false, 
					}} >
					{e=><WeightProm nav={e.navigation} setWA={setWeight} NA={numberCattle} />}
				</Stack.Screen>
				<Stack.Screen name="third" options={{ 
					title: 'Muestreo',
					headerStyle: { backgroundColor: '#E2FFE2',},
					headerShadowVisible: false,
					}} >
					{e=><PromForraje nav={e.navigation} setFV={setForraje} setPL={setGrazing}/>}
				</Stack.Screen>
				<Stack.Screen name="report" options={{ 
					title: 'Reporte', 
					headerStyle: { backgroundColor: '#E2FFE2',},
					headerShadowVisible: false,
					}} >
				{report}
				</Stack.Screen>
		</Stack.Navigator>
	);
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  
	  backgroundColor: '#fff',
	},
});