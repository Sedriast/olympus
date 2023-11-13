import { View, Text, StyleSheet, ImageBackground } from "react-native";

import Buttons from "../Fragments/Buttons";

export default function Report({
	background,
	navigation_,
	context: { values = {}, languages = {} },
}) {
	const { titles = {}, leyends = {} } = languages;
	const { realCharge, paddockForrage, numberOfPaddocks, realPaddockForrage } =
		values;

	return (
		<ImageBackground
			style={st.container}
			source={background}
			resizeMode="cover">
			<View style={st.panel}>
				<View style={st.left}>
					<Text style={st.t}>{titles.PADDOCKS_FORRAGE}</Text>
					<Text style={st.t}>{titles.PADDOCKS_AREA}</Text>
					<Text style={st.t}>{titles.NUMBER_OF_PADDOKS}</Text>

					<View style={st.line} />

					<Text style={st.t}>{titles.REAL_CHARGE}</Text>
				</View>
				<View style={st.right}>
					<Text style={st.l}>{paddockForrage}</Text>
					<Text style={st.l}>
						`${numberOfPaddocks} ${leyends.NUMBER_OF_PADDOKS}`
					</Text>
					<Text style={st.l}>
						`${realPaddockForrage} ${leyends.REAL_PADDOCKS_FORRAGE}`
					</Text>

					<View style={st.line} />

					<Text style={st.l}>
						`${realCharge} ${leyends.REAL_CHARGE}`
					</Text>
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
			</View>
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
	panel: {
		width: 400,
		height: 550,

		alignItems: "flex-end",
		justifyContent: "center",

		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 50,
		paddingBottom: 10,

		borderRadius: 20,

		backgroundColor: "rgb(225,225,225)",
	},
	btns: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	left: {
		width: 200,
		paddingRight: 10,
	},
	right: {
		width: 200,
		paddingLeft: 10,
	},
	line: {
		width: 200,
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: "rgb(0,0,0)",
	},
	t: {
		fontSize: 15,
	},
	l: {
		fontSize: 25,
		fontStyle: "bold",
	},
});
