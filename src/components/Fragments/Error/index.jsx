import { Modal, Pressable, View, Text, StyleSheet } from "react-native";

export default function Error({ leyend = "", close = () => {} }) {
	return (
		<Modal
			visible={true}
			transparent={true}
			statusBarTranslucent={true}
			animationType="fade">
			<View style={st.content}>
				<View style={st.view}>
					<Pressable style={st.button} onPress={close}>
						<Text>❌</Text>
					</Pressable>
					<Text style={st.l}>{leyend}</Text>
				</View>
			</View>
		</Modal>
	);
}

const st = StyleSheet.create({
	content: {
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	view: {
		position: "absolute",
		bottom: 0,

		width: "90%",
		height: "20%",

		marginLeft: "5%",

		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: "rgb(255,150,150)",

		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		position: "absolute",

		top: 10,
		right: 10,
		borderRadius: 20,
		padding: 10,

		backgroundColor: "red",
	},
	l: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
