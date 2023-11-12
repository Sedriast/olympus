import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavStack from "./NavStack";
import GenProvider from "../../hooks/useContext";

export default function App() {
	return (
		<NavigationContainer>
			<GenProvider>
				<NavStack />
			</GenProvider>
		</NavigationContainer>
	);
}
