import { View, Text, StyleSheet, ImageBackground } from "react-native";

import Buttons from "../Fragments/Buttons";

export default function Report({
	background,
	navigation_,
	context: { values = {}, languages = {} },
}) {
	const { titles = {}, leyends = {} } = languages;
	const {
		END,
		realCharge,
		paddocksArea,
		numberOfPaddocks,
		realPaddockForrage,
	} = values;

	return (
		<ImageBackground
			style={st.container}
			source={background}
			resizeMode="cover">
			<View style={st.panel}>
				<View style={st.left}>
					<Text style={st.t}>{titles.NUMBER_OF_PADDOKS}</Text>
					<Text style={st.t}>{titles.PADDOCKS_AREA}</Text>
					<Text style={st.t}>{titles.PADDOCKS_FORRAGE}</Text>

					<View style={st.line} />

					<Text style={st.t}>{titles.REAL_CHARGE}</Text>
				</View>
				<View style={st.right}>
					<Text style={st.l}>{numberOfPaddocks}</Text>
					<Text style={st.l}>
						{paddocksArea} {leyends.PADDOCKS_AREA}
					</Text>
					<Text style={st.l}>
						{realPaddockForrage} {leyends.REAL_PADDOCKS_FORRAGE}
					</Text>

					<View style={st.line} />

					<Text style={st.l}>
						{realCharge} {leyends.REAL_CHARGE}
					</Text>
				</View>
			</View>
			<View style={st.btns}>
				<Buttons
					leyend={leyends.BUTTON_1}
					press={() => navigation_.navigate("bovineCaracteristics")}
				/>
				<Buttons
					leyend={leyends.BUTTON_2}
					press={() => {
						END();
						navigation_.navigate("initialBanner");
					}}
				/>
			</View>
		</ImageBackground>
	);
}

const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "rgba(0,0,0,0.75)",
	},
	panel: {
		width: "90%",
		height: 250,

		alignItems: "flex-end",
		justifyContent: "center",

		padding: 20,
		borderRadius: 20,

		backgroundColor: "rgba(225,225,225,0.9)",
	},
	btns: {
		width: "80%",
		marginTop: 20,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	left: {
		position: "absolute",
		left: 25,
		width: 150,
		paddingRight: 10,
	},
	right: {
		position: "absolute",
		right: 25,
		width: 175,
		paddingLeft: 10,
	},
	line: {
		width: "auto",
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: "rgb(0,0,0)",
	},
	t: {
		textAlign: "right",
		textAlignVertical: "center",
		height: 30,
		fontSize: 15,
	},
	l: {
		marginLeft: 10,
		height: 30,
		fontSize: 25,
		fontStyle: "bold",
	},
});
