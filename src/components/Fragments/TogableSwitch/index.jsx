import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";

export default function ToggableButton({
	leftText = "",
	rigthText = "",
	isEnable = false,
	dispatch = () => {},
}) {
	return (
		<View style={st.container}>
			<Text style={st.l}>{leftText}</Text>
			<Switch
				value={isEnable}
				onValueChange={() => dispatch}
				ios_backgroundColor="rgb(62,62,62)"
				thumbColor={isEnable ? "rgb(243,243,243)" : "rgb(243,243,243)"}
				trackColor={{ false: "rgb(118,118,118)", true: "rgb(117,117,255)" }}
			/>
			<Text style={st.l}>{rigthText}</Text>
		</View>
	);
}
const st = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		fontSize: 10,
	},
	l: {
		fontSize: 25,
	},
});
