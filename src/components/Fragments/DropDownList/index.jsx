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

		textAlign: "center",
		alignContent: "center",
		textAlignVertical: "certer",
		backgroundColor: "rgb(40,175,170)",

		borderRadius: 20,
	},
	list: {
		textAlign: "center",
		alignContent: "center",

		marginTop: 10,
		borderRadius: 20,
		backgroundColor: "transparent",
	},
	item: {
		width: 300,
		height: 50,

		borderWidth: 2,
		borderRadius: 10,
		borderColor: "rgb(0,0,0)",

		marginTop: 5,

		textAlign: "center",
		alignContent: "center",
		backgroundColor: "rgb(0,80,40)",
	},
	l: {
		width: 300,
		height: 50,
		marginTop: 1,
		paddingLeft: 1,

		textAlign: "center",
		textAlignVertical: "center",

		fontSize: 25,
		color: "rgb(230,230,230)",
	},
	l2: {
		width: 250,

		fontSize: 25,
		marginBottom: 10,
		color: "rgb(230,230,230)",

		zIndex: 1,
	},
	ek: {
		width: 300,
		height: 45,
		marginTop: 1,
		paddingLeft: 1,

		textAlign: "center",
		textAlignVertical: "center",

		fontSize: 25,
		color: "rgb(230,230,230)",
	},
});
