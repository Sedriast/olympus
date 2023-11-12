import { Alert, Modal, Pressable, View, Text, StyleSheet } from "react-native";

export default function Error({ leyend = "" }) {
	return (
		<Modal
			visible={true}
			transparent={true}
			animationType="slide"
			onRequestClose={Alert.alert("closed")}>
			<View style={st.content}>
				<Text style={st.l}>{leyend}</Text>
				<Pressable
					style={[st.button, st.buttonClose]}
					onPress={Alert.alert("closed")}>
					<Text style={styles.textStyle}>❌</Text>
				</Pressable>
			</View>
		</Modal>
	);
}

const st = StyleSheet.create({
	content: {
		margin: 20,
		padding: 35,
		marginTop: 40,

		borderRadius: 20,
		backgroundColor: "white",

		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
});
