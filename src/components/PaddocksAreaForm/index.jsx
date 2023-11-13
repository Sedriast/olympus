import { View, StyleSheet, ImageBackground } from "react-native";

import Inputs from "../Fragments/Inputs";
import Buttons from "../Fragments/Buttons";
import DropDownList from "../Fragments/DropDownList";
// import {
// 	Image,
// 	SvgCss,
// 	SvgCssUri,
// 	SvgFromXml,
// 	SvgUri,
// 	SvgXml,
// } from "react-native-svg";

export default function PaddoksAreaForm({
	background,
	navigation_,
	context: {
		values = {},
		section = [],
		error = <></>,
		languages = {},
		grassTypes = {},
		operations = {},
		decorations = {},
	},
}) {
	const { COW_HEAD, AREA, GRASS } = decorations;
	const { leyends = {}, placeholders = {} } = languages;
	const { capacity = 1, grazingArea = 0.1, forrageVR = "" } = values;
	const { END, CAPACITY, GRAZING_AREA, FORRAGE_VARIETY_AND_RESTANT } =
		operations;

	return (
		<ImageBackground
			style={st.container}
			source={background}
			resizeMode="cover">
			{error}

			{/*<Image style={st.e} source={COW} />
			<SvgXml xml={Cow} width={150} height={150} />

			<View style={st.a_ico}><SvgCss xml={area} /></View>
			<View style={st.g_ico}><SvgCss xml={grass} /></View> */}

			<Inputs
				value={grazingArea}
				inputMode="numeric"
				keyboardType="numeric"
				leyend={leyends.GRAZING_AREA}
				placeholder={placeholders.GRAZING_AREA}
				onEndEditing={(event) =>
					GRAZING_AREA(parseFloat(event.nativeEvent.text))
				}
			/>
			<View style={st.line} />

			{section[0] && (
				<>
					<DropDownList
						value={forrageVR}
						items={grassTypes}
						leyend={leyends.FORRAGE_VARIETY}
						dispatch={FORRAGE_VARIETY_AND_RESTANT}
					/>
					<View style={st.line} />
				</>
			)}

			{section[1] && (
				<>
					<Inputs
						value={capacity}
						inputMode="numeric"
						keyboardType="numeric"
						leyend={leyends.CAPACITY}
						placeholder={placeholders.CAPACITY}
						onChangeText={(event) => CAPACITY(parseFloat(event).toFixed())}
					/>
					<View style={st.line} />
				</>
			)}

			{section[2] && (
				<Buttons
					leyend={leyends.BUTTON}
					press={() => {
						END();
						navigation_.navigate("bovineCaracteristics");
					}}
				/>
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
	},
	ch_ico: {
		position: "absolute",

		width: 175,
		height: 175,

		top: 0,
		right: 0,
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
