import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function DropDownList({
	items = [],
	placeholder = "",
	getItem = () => {},
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [viewedValue, setViewedValue] = useState(placeholder);

	return (
		<View>
			<TouchableOpacity style={st.button_} onPress={() => setIsOpen(!isOpen)}>
				<Text style={st.l}>{viewedValue}</Text>
			</TouchableOpacity>
			{isOpen ? (
				<View style={st.list}>
					{items.map((item, index) => {
						return (
							<TouchableOpacity
								key={index}
								style={st.item}
								onPress={() => {
									getItem(item.name, item.timeToSleep);
									setViewedValue(item.name);
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
		width: 250,
		height: 50,

		alignContent: "center",
		textAlignVertical: "certer",
		textAlign: "center",

		backgroundColor: "#28AEA8",

		borderRadius: 20,
	},
	list: {
		width: 250,

		alignContent: "center",
		textAlign: "center",

		marginTop: 10,

		backgroundColor: "transparent",

		borderRadius: 20,
	},
	item: {
		width: 250,
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
		width: 250,
		height: 50,

		textAlign: "center",
		textAlignVertical: "center",

		paddingLeft: 1,
		marginTop: 1,
		color: "#ffff",
		fontSize: 25,
	},
	ek: {
		width: 250,
		height: 45,

		textAlign: "center",
		textAlignVertical: "center",

		paddingLeft: 1,
		marginTop: 1,
		color: "#ffff",
		fontSize: 25,
	},
});
