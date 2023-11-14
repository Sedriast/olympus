import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GeneralContext } from "../../hooks/useContext";

import Report from "../Report";
import InitialBanner from "../InitialBanner";
import PaddoksAreaForm from "../PaddocksAreaForm";
import BovineCaracteristics from "../BovineCaracteristics";

const Stack = createNativeStackNavigator();

export default function NavStack() {
	const {
		background,
		initialBanner,
		reportEcuations,
		paddocksAreaForm,
		bovineCaracteristics,
	} = React.useContext(GeneralContext);
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="initialBanner"
				options={{ title: "Initial banner", headerShown: false }}>
				{(event) => (
					<InitialBanner
						background={background}
						context={initialBanner}
						navigation_={event.navigation}
					/>
				)}
			</Stack.Screen>

			<Stack.Screen
				name="paddocksAreaForm"
				options={{ title: "Paddocks area form", headerShown: false }}>
				{(event) => (
					<PaddoksAreaForm
						background={background}
						context={paddocksAreaForm}
						navigation_={event.navigation}
					/>
				)}
			</Stack.Screen>

			<Stack.Screen
				name="bovineCaracteristics"
				options={{ title: "Bovine caracteristics", headerShown: false }}>
				{(event) => (
					<BovineCaracteristics
						background={background}
						navigation_={event.navigation}
						context={bovineCaracteristics}
					/>
				)}
			</Stack.Screen>

			<Stack.Screen name="report" options={{ title: "", headerShown: false }}>
				{(event) => (
					<Report
						background={background}
						context={reportEcuations()}
						navigation_={event.navigation}
					/>
				)}
			</Stack.Screen>
		</Stack.Navigator>
	);
}
