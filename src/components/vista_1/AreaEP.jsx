import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { useState } from 'react';

import Inputs from '../0_general/1_input/Inputs';
import ModalV from '../0_general/1_modal/ModalV';

import backimg from '../../../assets/back.png';
import SingleButton from '../0_general/1_buttons/SingleButton';
import DropDownList from '../0_general/1_dropDownList/DropDownList';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AreaEP( props ){
	//component props
	const { nav, area_, forrageVariety_, forrageRest_, aforo_ } = 	props;
	//******************************************************************************************************************* */
	//Event list
	const [ openList, setOpen ] =           						useState(false);
	const [ leyend, setLeyend ] = 											useState("Tipo de hierba");
	//Events inputs
	const [ sectionTwo,     setSecTwo ] =   						useState(false);
	const [ sectionThree,   setSecThree ] = 						useState(false);
	const [ sectionFour,    setSecFour ] =  						useState(false);
	const list = [
		{   
			key: "Kikuyo",
			sleep: 35,
		},
		{   
			key: "Ryegrass",
			sleep: 35,
		},
		{   
			key: "Carreton rojo",
			sleep: 35,
		},
		{   
			key: "Carreton blanco",
			sleep: 35,
		},
	]
	//control error events
	const [ er1, setER1 ] =                 						useState(false);
	const [ er2, setER2 ] =                 						useState(false);
	const [ er3, setER3 ] =                 						useState(false);
	const [ er4, setER4 ] =                 						useState(false);
	//Memory of shippable data
	const [ areaEF, setAreaEF ] =             					useState(0.1);
	const [ forrageVariety, setFV_ ] =         					useState(1);
	const [ forrageRest, setFR_ ] =         						useState(1);
	const [ aforo, setAforo ] =         								useState(1);
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
			{/* _____________________________________SECTION TWO___________________________ */}
			{sectionTwo?(
			<View>
				<View style={ st.sepa1 } />
				<View style={ st.sepa2 } />
				<LinearGradient colors={[ 'transparent', '#7FA4A2', '#7FA4A2' ]} style={ st.port }>
					<TouchableOpacity onPress={ ()=>{setOpen( !openList )} }>
						<Text style={ st.layer }>{ leyend }</Text>
					</TouchableOpacity>
				</LinearGradient>
				<View>
					{openList?(
					<View style={ st.r }>
					{list.map(( e,i )=>{
					return (
						<TouchableOpacity key={ i } style={ st.btn } onPress={ console.log( "sdfa" ) }>
							<Text style={ st.layer }>{ e.key }</Text>
						</TouchableOpacity>
					)})}
					</View>):(<View></View>)}
				</View>
			</View>):<View></View>}
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
			</View>):<View></View>}
			{/* _____________________________________SECTION FOUR_________________________ */}
			{sectionFour?(
			<View>
				<View style={ st.sepa1 } />
				<View style={ st.sepa2 } />
				<SingleButton tile="Siguiente" press={ sendData }/>
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
	t1: "El Area efectiva de pastoreo, en Hectareas, es:",
	t2: "Aforo (gr/m2)",
}
const placeholders = {
	p1: "El Area efectiva de pastoreo",
	p2: "gr/m2",
}
const errors = {
	e1: "El area no puede estar vacia, porfavor reintente",
	e2: "A ocurrido un error inesperado en referente al tipo de forraje seleccionado",
	e3: "El aforo no puede estar vacio, porfavor reintente",
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
});