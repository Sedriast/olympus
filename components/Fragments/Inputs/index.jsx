import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Inputs({
	value = "",
	leyend = "",
	placeholder = "",
	inputMode = "text",
	keyboardType = "default",
	onEndEditing = () => {},
	onChangeText = () => {},
	onChange = () => {},
	onFocus = () => {},
	onBlur = () => {},
}) {
	return (
		<View style={st.container}>
			<Text style={st.l}>{leyend}</Text>
			<TextInput
				style={st.i}
				value={value}
				onBlur={onBlur}
				onFocus={onFocus}
				autoComplete="off"
				onChange={onChange}
				inputMode={inputMode}
				autoCapitalize="none"
				selectTextOnFocus={true}
				placeholder={placeholder}
				keyboardType={keyboardType}
				onEndEditing={onEndEditing}
				onChangeText={onChangeText}
			/>
		</View>
	);
}
const st = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	l: {
		width: 300,

		fontSize: 25,
		color: "white",

		zIndex: 1,
	},
	i: {
		width: 300,
		height: 40,

		fontSize: 25,
		backgroundColor: "white",
		borderRadius: 10,

		marginTop: 20,

		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 20,
		paddingRight: 20,

		zIndex: 1,
	},
});
