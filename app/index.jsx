import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Layout from "./Layout";
import { GenProvider } from "@/hooks/useContext";

export default function App() {
	return (
		<NavigationContainer independent={true}>
			<GenProvider>
				<Layout />
			</GenProvider>
		</NavigationContainer>
	);
}
