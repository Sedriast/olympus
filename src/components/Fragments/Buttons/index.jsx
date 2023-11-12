import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Buttons({ leyend = "", press = () => {} }) {
	return (
		<TouchableOpacity style={st.button_} onPress={press}>
			<Text style={st.text_}>{leyend}</Text>
		</TouchableOpacity>
	);
}
const st = StyleSheet.create({
	button_: {
		height: 50,

		backgroundColor: "#7ABF02",

		alignContent: "center",
		textAlign: "center",

		borderRadius: 40,

		paddingLeft: 20,
		paddingRight: 20,
	},
	text_: {
		height: 50,

		textAlign: "center",
		textAlignVertical: "center",

		paddingLeft: 1,
		marginTop: 1,

		color: "#ffff",
		fontSize: 25,
	},
});
