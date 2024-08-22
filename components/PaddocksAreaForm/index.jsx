import {
	View,
	Image,
	StatusBar,
	StyleSheet,
	ImageBackground,
} from "react-native";

import Inputs from "../Fragments/Inputs";
import Buttons from "../Fragments/Buttons";
import DropDownList from "../Fragments/DropDownList";

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
	const { leyends, placeholders } = languages;
	const { COW_HEAD, AREA, GRASS } = decorations;
	const { capacity, grazingArea, forrageVR } = values;
	const { END, CAPACITY, GRAZING_AREA, FORRAGE_VARIETY_AND_RESTANT } =
		operations;

	return (
		<ImageBackground
			style={st.container}
			source={background}
			resizeMode="cover"
			backgroundColor="#025529">
			{error}

			<Image style={st.ch_ico} source={COW_HEAD} />
			<Inputs
				inputMode="numeric"
				leyend={leyends.GRAZING_AREA}
				value={grazingArea.toString()}
				placeholder={placeholders.GRAZING_AREA}
				onChange={(event) => GRAZING_AREA(parseFloat(event.nativeEvent.text))}
			/>
			<View style={st.line} />

			{section[0] && (
				<>
					<Image style={st.a_ico} source={AREA} />
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
					<Image style={st.g_ico} source={GRASS} />
					<Inputs
						value={capacity}
						inputMode="numeric"
						keyboardType="numeric"
						leyend={leyends.CAPACITY}
						placeholder={placeholders.CAPACITY}
						onChangeText={(event) => CAPACITY(event)}
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
		backgroundColor: "#025529",
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
	ch_ico: {
		position: "absolute",

		width: 150,
		height: 150,

		top: 30,
		right: -20,

		zIndex: 0,
	},
	a_ico: {
		position: "absolute",

		width: 100,
		height: 100,

		left: 25,
		top: 400,

		zIndex: 0,
	},
	g_ico: {
		position: "absolute",

		width: 150,
		height: 200,

		bottom: -15,
		right: 10,

		zIndex: 0,
	},
});
