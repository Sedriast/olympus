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

		paddingLeft: 20,
		paddingRight: 20,
	},
	layer:{
		height: 50,

		textAlign:"center",
		textAlignVertical: "center",

		paddingLeft: 1,
		marginTop: 1,

		color: "#ffff",
		fontSize: 25,
	},
});
