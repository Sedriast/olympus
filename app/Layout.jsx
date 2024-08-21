import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Report from "../components/Report";
import InitialBanner from "../components/InitialBanner";
import PaddocksAreaForm from "../components/PaddocksAreaForm";
import BovineCaracteristics from "../components/BovineCaracteristics";

import { GeneralContext } from "@/hooks/useContext";

const Stack = createNativeStackNavigator();

export default function Layout() {
	const {
		background,
		initialBanner,
		reportEcuations,
		paddocksAreaForm,
		bovineCaracteristics,
	} = React.useContext(GeneralContext);

	if (
		!background ||
		!initialBanner ||
		!reportEcuations ||
		!paddocksAreaForm ||
		!bovineCaracteristics
	) {
		console.error("Una o más propiedades del contexto no están definidas");
		return null; // O muestra un mensaje de error o un componente de carga
	}

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
					<PaddocksAreaForm
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
