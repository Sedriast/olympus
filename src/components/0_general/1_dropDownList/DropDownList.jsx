import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DropDownList( props ) {
	const { initLayer, list } = props;
	//---------------------------------------------------------------------------------------------------
	const [ openList, setOpen ] =           						useState(false);
	const [ leyend, setLeyend ] = 											useState(initLayer);
	//---------------------------------------------------------------------------------------------------
  return (
		<View>
			<LinearGradient colors={[ 'transparent', '#7FA4A2', '#7FA4A2' ]} style={ st.port }>
				<TouchableOpacity onPress={ console.log("sad") }>
					<Text style={ st.layer }>{ leyend }</Text>
				</TouchableOpacity>
			</LinearGradient>
		{openList?(
			<View style={ st.r }>
			{list.map(( e,i )=>{
			return (
				<TouchableOpacity style={ st.btn } onPress={ press }>
					<Text style={ st.layer }>{ e.key }</Text>
				</TouchableOpacity>
			)})}
			</View>):(<View></View>)}
	</View>
  );
}
const st = StyleSheet.create({
	port:{
		width: 350,
		height: 50,

		alignContent:"center",
		textAlign: "center",

		backgroundColor: "transparent",

		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	btn:{
		width: 350,
		height: 50,

		alignContent:"center",
		textAlign: "center",

		backgroundColor: "#004E27",
	},
	layer:{
		width: 350,
		height: 45,

		textAlign:"center",
		textAlignVertical: "center",
		paddingLeft: 1,
		marginTop: 1,
		color: "#ffff",
		fontSize: 25, 
	},
	r:{
		width: 350,
		backgroundColor: "#fff",
	},
});
