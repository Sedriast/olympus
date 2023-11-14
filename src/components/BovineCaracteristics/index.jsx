import { Image, ImageBackground, StyleSheet, View } from "react-native";

import Inputs from "../Fragments/Inputs";
import Buttons from "../Fragments/Buttons";
import DropDownList from "../Fragments/DropDownList";

export default function BovineCaracteristics({
	background,
	navigation_,
	context: {
		values = {},
		section = [],
		error = <></>,
		languages = {},
		operations = {},
		decorations = {},
		grassFreshness_ = [],
	},
}) {
	const { COW, CART, BALANCE } = decorations;
	const { leyends = {}, placeholders = {} } = languages;
	const {
		animalWeight = 0,
		grassFreshness = "",
		ocupationPeriode = 0,
	} = values;
	const { END, FORRAGE_CONSUME, ANIMAL_WEIGHT, OCUPATION_PERIODE } = operations;

	return (
		<ImageBackground
			style={st.container}
			source={background}
			resizeMode="cover">
			{error}

			<Image style={st.b_ico} source={BALANCE} />
			<Inputs
				inputMode="numeric"
				value={animalWeight}
				keyboardType="numeric"
				leyend={leyends.ANIMAL_WEIGHT}
				placeholder={placeholders.ANIMAL_WEIGHT}
				onEndEditing={(event) =>
					ANIMAL_WEIGHT(parseFloat(event.nativeEvent.text))
				}
			/>
			<View style={st.line} />

			{section[0] && (
				<>
					<Image style={st.c_ico} source={COW} />
					<Inputs
						inputMode="numeric"
						keyboardType="numeric"
						value={ocupationPeriode}
						leyend={leyends.OCUPATION_PERIODE}
						placeholder={placeholders.OCUPATION_PERIODE}
						onEndEditing={(event) =>
							OCUPATION_PERIODE(parseFloat(event.nativeEvent.text))
						}
					/>
					<View style={st.line} />
				</>
			)}

			{section[1] && (
				<>
					<Image style={st.ca_ico} source={CART} />
					<DropDownList
						value={grassFreshness}
						items={grassFreshness_}
						dispatch={FORRAGE_CONSUME}
						leyend={leyends.GRASS_FRESHNESS}
					/>
					<View style={st.line} />
				</>
			)}

			{section[2] && (
				<View style={st.btns}>
					<Buttons
						leyend={leyends.BUTTON_1}
						press={() => navigation_.navigate("paddocksAreaForm")}
					/>
					<Buttons
						leyend={leyends.BUTTON_2}
						press={() => {
							END();
							navigation_.navigate("report");
						}}
					/>
				</View>
			)}
		</ImageBackground>
	);
}
const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "rgb(0,0,0)",
	},
	line: {
		width: 300,
		height: 5,

		marginTop: 40,
		marginBottom: 40,

		borderBottomWidth: 4,
		borderBottomColor: "rgb(0,0,0)",

		zIndex: 1,
	},
	btns: {
		width: "80%",
		marginTop: 20,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",

		zIndex: 1,
	},
	b_ico: {
		width: 100,
		height: 100,

		position: "absolute",

		right: 20,
		top: 50,

		zIndex: 0,
	},
	c_ico: {
		position: "absolute",

		width: 225,
		height: 150,

		bottom: 0,
		left: 10,

		zIndex: 0,
	},
	ca_ico: {
		position: "absolute",

		width: 200,
		height: 125,

		bottom: -2.5,
		right: -20,

		zIndex: 0,
	},
});
