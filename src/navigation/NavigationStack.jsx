import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from 'react';
import { StyleSheet } from 'react-native';

import WeightProm from "../components/vista_2/WeightProm";
import PromForraje from "../components/vista_3/PromForraje";
import Report2 from "../components/vista_4/Report2";
import AreaEP from "../components/vista_1/AreaEP";

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    const [ area, setArea_ ] =        useState(1);

	const [ forrajeVerde, setForraje ] =  useState(1);
	const [ freeGrazing, setGrazing ] =   useState(1);

	const [ animalWeight, setWeight ] =   useState(1);

	const report = () => {
		console.log( numberCattle, length_, width_, forrajeVerde, freeGrazing, animalWeight);

		//******************************************** */
		let cvfv_animal = animalWeight*0.125; 
		let constotfv_dia = cvfv_animal*numberCattle;
		let unk = forrajeVerde*(length_*width_);
		let unk2 = unk*numberCattle;
		let dias_carga = unk/constotfv_dia;

		let m2_dia = constotfv_dia/forrajeVerde ;
		let rela = width_/Math.sqrt(m2_dia);

		let longiF = Math.sqrt(m2_dia)/rela;

		//******************************************** */
		let dias_tolerancia = dias_carga-(dias_carga*0.2);

		let longLotes = length_/dias_tolerancia;
		let numLotes = length_/longLotes;

		let avance_dia = longiF;
		
		console.log(cvfv_animal, constotfv_dia, unk, unk2, dias_carga, m2_dia, rela, dias_tolerancia, longLotes, numLotes, avance_dia);

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
					{e=><AreaEP nav={e.navigation} setArea_={setArea_} />}
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