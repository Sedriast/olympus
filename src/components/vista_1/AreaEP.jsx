import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { useState } from 'react';

import Inputs from '../0_general/1_input/Inputs';
import ModalV from '../0_general/1_modal/ModalV';

import backimg from '../../../assets/back.png';
import area from '../../../assets/deco/icoa.png';
import pasto from '../../../assets/deco/pasto.png';
import vaca from '../../../assets/deco/vaca.png';

import SingleButton from '../0_general/1_buttons/SingleButton';
import DropDownList from '../0_general/1_dropDownList/DropDownList';

export default function AreaEP( props ){
	//component props
	const { nav, area_, forrageVariety_, forrageRest_, aforo_ } = 	props;
	//******************************************************************************************************************* */
	//Events inputs
	const [ sectionTwo,     setSecTwo ] =   						useState(false);
	const [ sectionThree,   setSecThree ] = 						useState(false);
	const [ sectionFour,    setSecFour ] =  						useState(false);
	const list = [
		{   
			key: "KIKUYO",
			sleep: 35,
		},
		{   
			key: "RYEGRASS",
			sleep: 35,
		},
		{   
			key: "CARRETON ROJO",
			sleep: 35,
		},
		{   
			key: "CARRETON BLANCO",
			sleep: 35,
		},
	]
	//control error events
	const [ er1, setER1 ] =                 						useState(false);
	const [ er2, setER2 ] =                 						useState(false);
	const [ er3, setER3 ] =                 						useState(false);
	const [ er4, setER4 ] =                 						useState(false);
	//Memory of shippable data
	const [ areaEF, setAreaEF ] =             						useState(0.1);
	const [ forrageVariety, setFV_ ] =         						useState(1);
	const [ forrageRest, setFR_ ] =         						useState(1);
	const [ aforo, setAforo ] =         							useState(1);
	//******************************************************************************************************************* */
	function terrainArea(e){
		if(e > -0.1){
			setAreaEF(e);
			setSecTwo(true);
		}else{
			setAreaEF(0.1);
			setSecTwo(false);
			if(sectionThree){
				setSecThree(false);
				setSecFour(false);
			}
			setER1(true);
		}
	}
	function forrageFunc( rest, name ){
		if(rest > 1 && name != ""){
			setFV_(rest);
			setFR_(name);
			setSecThree(true);
		}else{
			setSecThree(false);
			setSecFour(false);
			setER2(true);
		}
	}
	function aforoFunc( e ){
		if( e > 0 ){
			setAforo(e);
			setSecFour(true);
		}else{
			setAforo(1);
			setSecFour(false);
			setER3(true);
		}
	}
	function sendData(){
		if(areaEF > 0 && aforo > 0){
			area_(areaEF);
			forrageVariety_(forrageVariety);
			forrageRest_(forrageRest);
			aforo_(aforo);

			nav.navigate("second");
		}else{
			setER4(true);
		}
	}
	//******************************************************************************************************************* */
	return( 
		<ImageBackground source={backimg} resizeMode="cover" style={st.container}>
			{/* _____________________________________SECTION ONE___________________________ */}
			<View>
				<Inputs
					placeholder={ placeholders.p1 } leyend={ texts.t1 }
					type="numeric" keyType="numeric"
					endEd={e=>terrainArea(parseFloat(e.nativeEvent.text))}
				/>
			</View>
			<Image style={st.icoa} source={area} />
			{/* _____________________________________SECTION TWO___________________________ */}
			{sectionTwo?(<>
			<View>
				<View style={ st.sepa1 } />
				<View style={ st.sepa2 } />

				<DropDownList initLayer="Tipo de hierba" list={ list } press={ forrageFunc } />
			</View>
			<Image style={st.pas} source={pasto} /></>
			):<View></View>
			}
			{/* _____________________________________SECTION THREE_________________________*/}
			{sectionThree?(
			<View>
				<View style={ st.sepa1 } />
				<View style={ st.sepa2 } />
				<Inputs
					placeholder={ placeholders.p2 } leyend={ texts.t2 }
					type="numeric" keyType="numeric"
					chText={ e=>aforoFunc(parseFloat(e).toFixed()) }
				/>

				<Image style={st.vac} source={vaca} />
			</View>):<View></View>}
			{/* _____________________________________SECTION FOUR_________________________ */}
			{sectionFour?(
			<View>
				<View style={ st.sepa1 } />
				<View style={ st.sepa2 } />
				<SingleButton tile="SIGUIENTE" press={ sendData }/>
			</View>):<View></View>}
			{/* _____________________________________ERRORS SECTION________________________ */}
			<ModalV msj={ errors.e1 } visi={ er1 } setVisi={ setER1 } />
			<ModalV msj={ errors.e2 } visi={ er2 } setVisi={ setER2 } />
			<ModalV msj={ errors.e3 } visi={ er3 } setVisi={ setER3 } />
			<ModalV msj={ errors.e4 } visi={ er4 } setVisi={ setER4 } />
		</ImageBackground>
	);
}
const texts = {
	t1: "EL ÁREA EFECTIVA DE PASTOREO EN HECTÁREAS ES:",
	t2: "LA PRODUCCIÓN DE PASTO POR METRO CUADRADO ES:",
}
const placeholders = {
	p1: "Área efectiva de pastoreo",
	p2: "gr/m2",
}
const errors = {
	e1: "El área es incorrecta,reintente",
	e2: "A ocurrido un error en el tipo de pasto",
	e3: "Aforo incorrecto, porfavor reintente",
	e4: "A ocurrido un error inesperado, porfavor reintente",
}
const st = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  
	  backgroundColor: '#fff',
	},
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

		backgroundColor: "#7ABF02",
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
	sepa1: {
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor:"#000",
	},
	sepa2: {
		height: 50,
		borderTopWidth: 2,
		borderTopColor:"#000",
	},
	r:{
		width: 350,
		backgroundColor: "#fff",
	},
	e:{
		width: 350,
		marginBottom: 10,
	},
	d:{
		width: 350,
		backgroundColor: "#fff",
		marginBottom: 2,
	},
	icoa:{
		width: 200,
		height: 200,

		position: "absolute",

		left: -85,
		top: 205,

		zIndex: 0,
	},
	pas:{
		position: "absolute",

		width: 150,
		height: 200,

		bottom: -30,
		right: 10,
	},
	vac:{
		position: "absolute",

		width: 175,
		height: 175,

		top: -375,
		right: -100,
	},
});