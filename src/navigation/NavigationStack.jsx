import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from 'react';
import { StyleSheet } from 'react-native';

import WeightProm from "../components/vista_2/WeightProm";
import Report2 from "../components/vista_3/Report2";
import AreaEP from "../components/vista_1/AreaEP";

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
	//State variables
		const [ areaEP, setAreaEP_ ] =        		useState(1);
	const [ forrageVariety, setFV_ ] =     			useState(1);
	const [ aforo, setAforo_ ] =   							useState(1);
	const [ animalWeight, setWeight_ ] =   			useState(1);
	const [ forrageConsum, setFC_ ] =						useState(1);
	const [ occupationPeriot, setOP_ ] =				useState(1);
	const [ forrageRest, setFR_ ] = 						useState(1);

	//Constants
	const perdidaPastoreo = 										0.2;
	const grazingDays = 												forrageRest + occupationPeriot;
	const UGG = 																450;

	const report = () => {
		//******************************************************************************************* */
		let NoPaddocks = 													(forrageRest / occupationPeriot) + 1;
		let areaPaddocks =												(areaEP*10000)/parseFloat(NoPaddocks).toFixed();
		let forragePaddock = 											(areaPaddocks*aforo)/1000;
		let realForragePaddock = 									forragePaddock-(forragePaddock*perdidaPastoreo);
		let animalCharge = 												realForragePaddock / (occupationPeriot * (animalWeight * forrageConsum));
		let realCharge =													((animalCharge * animalWeight) / UGG);

		let unk_1 = 															realCharge * animalWeight * forrageConsum;
		let unk_2 = 															realForragePaddock / unk_1;
		let unk_3 = 															Math.sqrt(areaPaddocks);
		
		return (
			<Report2 
				paddockLog =													{NoPaddocks}
				areaPaddock =													{areaPaddocks}
				forragePaddock =											{forragePaddock}
				realForragePaddock =									{realForragePaddock}
				animalCharge =												{animalCharge}
				realCharge =													{realCharge}
			/>
		);
	}
	return (
		<Stack.Navigator >
				<Stack.Screen name="first" options={{ title: '', headerShown: false,}} >
					{e=><AreaEP nav={e.navigation} area_={setAreaEP_} forrageVariety_={setFR_} forrageRest_={setFV_} aforo_={setAforo_} />}
				</Stack.Screen>

				<Stack.Screen name="second" options={{ 
					title: 'Pesos, forraje y ocupación', 
					headerStyle: {backgroundColor: '#E2FFE2',},
					headerShadowVisible: false, 
					}} >
					{e=><WeightProm nav={e.navigation} weigth_={setWeight_} forrageConsum_={setFC_} occupationPeriot_={setOP_}/>}
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
const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		
		backgroundColor: '#fff',
	},
});