import { StyleSheet, ImageBackground, Image, View } from 'react-native';

import backimg from '../../../assets/splash.png';
import gizu from '../../../assets/deco/logos/gizu.png';
import ebate from '../../../assets/deco/logos/ebate.png';
import creing from '../../../assets/deco/logos/creing.png';

import SingleButton from '../0_general/1_buttons/SingleButton';

export default function Logos( props ){
	const { nav } = props;

	return( 
		<ImageBackground style={ st.container } source={ backimg } resizeMode="cover" >
			<Image style={ st.gizu } source={ gizu } />
			<Image style={ st.ebate } source={ ebate } />
			<Image style={ st.creing } source={ creing } />
			<View style={ st.sepa1 }>
				<SingleButton tile="SIGUIENTE" press={ () => nav.navigate("first") }/>
			</View>
		</ImageBackground>
	);
}
const st = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  
	  backgroundColor: '#fff',
	},
	sepa1: {
		height: 50,
		
		position: "absolute",

		top: 725,
	},
	gizu: {
		width: 150,
		height: 150,
		
		position: "absolute",

		left: 200,
		top: 550,
	},
	ebate: {
		width: 200,
		height: 200,
		
		position: "absolute",

		left: 80,
		top: 100,
	},
	creing: {
		width: 150,
		height: 150,
		
		position: "absolute",

		left: 50,
		top: 550,
	},
});