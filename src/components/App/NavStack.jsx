import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from "react-native";
import { GeneralContext } from "../../hooks/useContext";

import InitialBanner from "../InitialBanner";
import PaddoksAreaForm from "../PaddocksAreaForm";
// import WeightProm from "../components/vista_2/WeightProm";
// import Report2 from "../components/vista_3/Report2";

const Stack = createNativeStackNavigator();

export default function NavStack() {
	const { initialBanner, paddocksAreaForm } = React.useContext(GeneralContext);
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="initialBanner"
				options={{ title: "Initial banner", headerShown: false }}>
				{(event) => (
					<InitialBanner
						navigation_={event.navigation}
						context={initialBanner}
					/>
				)}
			</Stack.Screen>

			<Stack.Screen
				name="paddocksAreaForm"
				options={{ title: "Paddocks area form", headerShown: false }}>
				{(event) => (
					<PaddoksAreaForm
						navigation_={event.navigation}
						context={paddocksAreaForm}
					/>
				)}
			</Stack.Screen>

			<Stack.Screen
				name="bovineCaracteristics"
				options={{ title: "Bovine_caracteristics", headerShown: false }}>
				{(event) => (
					<WeightProm
						navigation_={event.navigation}
						weigth_={setWeight_}
						forrageConsum_={setFC_}
						occupationPeriot_={setOP_}
					/>
				)}
			</Stack.Screen>

			{/* <Stack.Screen name="report" options={{ title: "", headerShown: false }}>
				{(e) => <GenProvider><Report2 /></GenProvider>
			</Stack.Screen> */}
		</Stack.Navigator>
	);
}
const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "#fff",
	},
});
