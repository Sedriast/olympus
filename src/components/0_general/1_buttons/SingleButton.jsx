import { TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function SingleButton( props ) {
	const { tile, press } = props;
	//---------------------------------------------------------------------------------------------------
	return (
	<TouchableOpacity style={ st.btn } onPress={ press }>
		<Text style={ st.layer }>{ tile }</Text>
	</TouchableOpacity>);
}
const st = StyleSheet.create({
	btn:{
		height: 50,
		backgroundColor: "#7ABF02",
		alignContent:"center",
		textAlign: "center",
		borderRadius: 40,
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
	gr:{
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	}
});
