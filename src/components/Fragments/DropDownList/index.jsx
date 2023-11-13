import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function DropDownList({
	value = "",
	items = [],
	leyend = "",
	dispatch = () => {},
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<View>
			<Text style={st.l2}>{leyend}</Text>
			<TouchableOpacity style={st.button_} onPress={() => setIsOpen(!isOpen)}>
				<Text style={st.l}>{value}</Text>
			</TouchableOpacity>
			{isOpen ? (
				<View style={st.list}>
					{items.map((item, index) => {
						return (
							<TouchableOpacity
								key={index}
								style={st.item}
								onPress={() => {
									dispatch(item.name, item.timeToSleep);
									setIsOpen(!isOpen);
								}}>
								<Text style={st.ek}>{item.name}</Text>
							</TouchableOpacity>
						);
					})}
				</View>
			) : (
				<View></View>
			)}
		</View>
	);
}
const st = StyleSheet.create({
	button_: {
		height: 50,

		paddingLeft: 1,
		paddingRight: 1,

		alignContent: "center",
		textAlignVertical: "certer",
		textAlign: "center",

		backgroundColor: "#28AEA8",

		borderRadius: 20,
	},
	list: {
		alignContent: "center",
		textAlign: "center",

		marginTop: 10,

		backgroundColor: "transparent",

		borderRadius: 20,
	},
	item: {
		width: 300,
		height: 50,

		borderRadius: 10,
		borderColor: "black",
		borderWidth: 2,

		marginTop: 5,

		alignContent: "center",
		textAlign: "center",

		backgroundColor: "#004E27",
	},
	l: {
		width: 300,
		height: 50,

		textAlign: "center",
		textAlignVertical: "center",

		paddingLeft: 1,
		marginTop: 1,
		color: "rgb(230,230,230)",
		fontSize: 25,
	},
	l2: {
		width: 250,

		fontSize: 25,
		color: "rgb(230,230,230)",
		marginBottom: 10,

		zIndex: 1,
	},
	ek: {
		width: 300,
		height: 45,

		textAlign: "center",
		textAlignVertical: "center",

		paddingLeft: 1,
		marginTop: 1,
		color: "rgb(230,230,230)",
		fontSize: 25,
	},
});
