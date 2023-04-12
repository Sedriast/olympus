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
		   	<Text style={st.t}>CANTIDAD DE POTREROS: </Text>
		   	<Text style={st.tr}>{parseFloat(paddockLog).toFixed()}</Text>
			<Text />
		   	<Text style={st.t}>ÁREA DE CADA POTRERO: </Text>
			<Text style={st.tr}>{parseFloat(areaPaddock).toFixed()} m²</Text>

			<Text />
		   	<Text style={st.t}>PRODUCCIÓN DE PASTO:	</Text>
		   	<Text style={st.tr}>{parseFloat(realForragePaddock).toFixed()} gr/m²</Text>
			<Text />
			<Text style={st.tr}>____________________________</Text>
		   	
			<Text />
			<Text style={st.t}>LOS POTREROS PUEDEN MANTENER</Text>
			<Text style={st.tr}>{parseFloat(realCharge).toFixed()} CABEZAS DE GANADO</Text>
		</View>
		<View style={ st.home } >
			<SingleButton tile="INICIO" press={ () => nav.navigate("cero") }/>
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
		width: 350,
		height: 550,

		alignItems: "flex-end",
		justifyContent: "center",

		paddingLeft: 10,
		paddingRight: 50,
		paddingTop: 10,
		paddingBottom: 10,

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
		fontSize: 18,
	},
	tr:{
		fontSize: 25,
		fontStyle: "bold",
	},
})