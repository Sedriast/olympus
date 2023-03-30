import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import backimg from '../../../assets/back.png';

export default function Report2( props ){
	const {
		paddockLog,
		areaPaddock,
		forragePaddock,
		realForragePaddock,
		animalCharge,
		realCharge,} =                                  props;
	return (
	<ImageBackground source={backimg} resizeMode="cover" style={st.container}>
		<View style={st.cont}>
		   <Text>Cantidad de potreros:                  {parseFloat(paddockLog).toFixed()} </Text>
		   <Text>Área individual:                       {parseFloat(areaPaddock).toFixed()} m²</Text>
		   <Text>Hierba por potrero:                    {parseFloat(forragePaddock).toFixed()} gr/m²</Text>
		   <Text>Hierba real por potrero:               {parseFloat(realForragePaddock).toFixed()} gr/m²</Text>
		   <Text>_______________________________________</Text>
		   <Text>                                       {parseFloat(animalCharge).toFixed()} cabeza de ganado</Text>
		   <Text>                                       {parseFloat(realCharge).toFixed()} cabezas de ganado</Text>
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

		alignItems: "flex-end",
		justifyContent: "center",

		paddingLeft: 20,
		paddingRight: 20,

		borderRadius: 20,
		
		backgroundColor: '#36FF8A',
	},
	btn:{
		width:250,
		height: 100,
		marginTop:40,
		marginLeft:15,
		borderRadius:100,
	},
	tx1:{
		fontSize: 20,
		textAlign:"center",
	},
})