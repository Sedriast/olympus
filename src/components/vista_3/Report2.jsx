import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import backimg from '../../../assets/back.png';
import SingleButton from '../0_general/1_buttons/SingleButton';

export default function Report2( props ){
	const {
		nav,
		paddockLog,
		areaPaddock,
		realForragePaddock,
		realCharge,} =                                  props;
	return (
	<ImageBackground source={backimg} resizeMode="cover" style={st.container}>
		<View style={ st.back } >
			<SingleButton tile="ATRÁS" press={ () => nav.navigate("second") }/>
		</View>
		<View style={st.cont}>
		   <Text style={st.t}>CANTIDAD DE POTREROS:																		{parseFloat(paddockLog).toFixed()} </Text>
		   <Text style={st.t}>ÁREA DEL POTRERO:														{parseFloat(areaPaddock).toFixed()} m²</Text>
		  
		   <Text style={st.t}>PRODUCCIÓN DE PASTO:	{parseFloat(realForragePaddock).toFixed()} gr/m²</Text>
		   <Text style={st.t}>_______________________________________</Text>
		   <Text style={st.t}>EN EL POTRERO SE PUEDEN MANTENER {parseFloat(realCharge).toFixed()} CABEZAS DE GANADO</Text>
		</View>
		<View style={ st.home } >
			<SingleButton tile="INICO" press={ () => nav.navigate("first") }/>
		</View>
	</ImageBackground>)
}
const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		
		backgroundColor: '#fff',
	},
	cont: {
		flex: 0.3,

		width: 400,

		alignItems: "flex-end",
		justifyContent: "center",

		paddingLeft: 20,
		paddingRight: 20,

		borderRadius: 20,
		
		backgroundColor: '#E5E5E5',
	},
	back:{
		position: "absolute",

		top: 50,
		left: 20,

		height: 40,
	},
	home:{
		position: "absolute",

		bottom: 100,

		height: 40,
	},
	t:{
		fontSize: 25,
	},
})