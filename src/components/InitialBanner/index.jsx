import { StyleSheet, ImageBackground, Image } from "react-native";

import Buttons from "../Fragments/Buttons";

export default function InitialBanner({
	navigation_,
	context: { logos = {}, language = "" },
}) {
	const { GIZU, EBATE, CREING, BACKGROUND } = logos;
	return (
		<ImageBackground
			style={st.container}
			source={BACKGROUND}
			resizeMode="cover">
			<Image style={st.e} source={EBATE} />
			<Image style={st.g} source={GIZU} />
			<Image style={st.c} source={CREING} />
			<Buttons
				leyend={language}
				press={() => navigation_.navigate("paddocksAreaForm")}
			/>
		</ImageBackground>
	);
}

const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "#fff",
	},

	e: {
		width: 150,
		height: 150,

		marginBottom: 20,
	},

	c: {
		width: 150,
		height: 150,

		marginBottom: 20,
	},

	g: {
		width: 150,
		height: 150,

		marginBottom: 20,
	},
});
