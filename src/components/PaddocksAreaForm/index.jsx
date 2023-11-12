import { View, StyleSheet, ImageBackground } from "react-native";

import Inputs from "../Fragments/Inputs";
import Buttons from "../Fragments/Buttons";
import DropDownList from "../Fragments/DropDownList";

export default function PaddoksAreaForm({
	error = {},
	navidation,
	section = [],
	language = {},
	grassTypes = {},
	operations = {},
	decorations = {},
}) {
	const { placeholders, leyends } = language;
	const { area, grass, cow, background } = decorations;
	const { CAPACITY, GRAZING_AREA, FORRAGE_VARIETY_AND_RESTANT } = operations;

	function forrageFunc(rest, name) {
		if (rest > 1 && name != "") {
			setFV_(rest);
			setFR_(name);
			setSecThree(true);
		} else {
			setSecThree(false);
			setSecFour(false);
			setER2(true);
		}
	}
	return (
		<ImageBackground
			resizeMode="cover"
			source={background}
			style={st.container}>
			{/*DECORATION SECTION_______________________________________ */}
			<View style={st.c_ico}>{cow}</View>
			<View style={st.a_ico}>{area}</View>
			<View style={st.g_ico}>{grass}</View>
			{/*ERROR SECTION____________________________________________ */}
			{error}
			{/*FIRST SECTION____________________________________________ */}
			<Inputs
				inputMode="numeric"
				keyboardType="numeric"
				leyend={leyends.GRAZING_AREA}
				placeholder={placeholders.GRAZING_AREA}
				onEndEditing={(event) =>
					GRAZING_AREA(parseFloat(event.nativeEvent.text))
				}
			/>
			<View style={st.line} />
			{/*SECOND SECTION____________________________________________ */}
			{section[0] && (
				<>
					<DropDownList
						items={grassTypes}
						getItem={FORRAGE_VARIETY_AND_RESTANT}
						placeholder={leyends.GRASS_VARIETY_AND_RESTANT}
					/>
					<View style={st.line} />
				</>
			)}
			{/*THIRD SECTION____________________________________________ */}
			{section[1] && (
				<>
					<Inputs
						inputMode="numeric"
						keyboardType="numeric"
						leyend={leyends.CAPACITY}
						placeholder={placeholders.CAPACITY}
						onChangeText={(event) => CAPACITY(parseFloat(event).toFixed())}
					/>
					<View style={st.line} />
				</>
			)}
			{/*FOURTH SECTION____________________________________________ */}
			{section[2] && (
				<Buttons
					leyend={leyends.BUTTON_PAF}
					press={() => navidation.navigate("second")}
				/>
			)}
		</ImageBackground>
	);
}
const st = StyleSheet.create({
	container: {
		position: "relative",

		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "#fff",
	},
	line: {
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: "#000",
	},
	c_ico: {
		position: "relative",

		width: 175,
		height: 175,

		top: -375,
		right: -100,
	},
	a_ico: {
		position: "relative",

		width: 200,
		height: 200,

		left: -85,
		top: 205,

		zIndex: 0,
	},
	g_ico: {
		position: "relative",

		width: 150,
		height: 200,

		bottom: -30,
		right: 10,
	},
});
