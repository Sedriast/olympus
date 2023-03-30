import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';

import ModalV from '../0_general/1_modal/ModalV';
import SingleButton from '../0_general/1_buttons/SingleButton';
import Inputs from '../0_general/1_input/Inputs';

import backimg from '../../../assets/back.png';
import DropDownList from '../0_general/1_dropDownList/DropDownList';

export default function WeightProm( props ){
	//component props
	const { nav, weigth_, forrageConsum_, occupationPeriot_} = 		props;
	//******************************************************************************************************************* */
	//Events of inputs
	const list = [
		{
			key: "Tierno",
			sleep: 0.12,
		},
		{   
			key: "Medio",
			sleep: 0.13,
		},
		{   
			key: "Viejo",
			sleep: 0.15,
		},
	]
	//Events lists
	const [ openList, setOpen ] =           						useState(false);
	const [ leyend, setLeyend ] = 									useState(list[0].key);

	const [ sectionTwo, setSecTwo ] =   							useState(false);
	const [ sectionThree, setSecThree ] =   						useState(false);
	const [ sectionFour, setSecFour ] =   							useState(false);

	//control error events
	const [ er1, setER1 ] =             							useState(false);
	const [ er2, setER2 ] =             							useState(false);

	//Memory of shippable data
	const [ pWeight, setWeigth ] =        							useState(0);
	const [ forrageConsum, setFC_ ] =     							useState(0);
	const [ occupationPeriot, setOP_ ] =  							useState(0);
	//******************************************************************************************************************* */
	function promWeight( e ){
		if( e>1 ){
			setWeigth( e );
			setSecTwo(true);
		}else{
			setER1(true);
			setSecTwo(false);
			setSecThree(false);
			setSecFour(false);
		}
	}	
	function occupationPeriotFunc( e ){
		if(e>1){
			setOP_( e );
			setSecThree(true);
		}else{
			setER1(true);
			setSecThree(false);
			setSecFour(false);
		}
	}
	function forrageConsumFunc( e ){
		if(e>0){
			setFC_( e );
			setSecFour(true);
		}else{
			setER2(true);
			setSecFour(false);
		}

	}
	function sendData(){
		if(pWeight > 0 && forrageConsum > 0 && occupationPeriot > 0){
			weigth_(pWeight);
			forrageConsum_(forrageConsum);
			occupationPeriot_(occupationPeriot);

			nav.navigate("report");
		}else{
			setER2(true);
		}
	}
	//******************************************************************************************************************* */
	return (
	<ImageBackground source={backimg} resizeMode="cover" style={st.container}>
		{/* _______________________________________________________________SECTION ONE________________________ */}
		<View>
			<Text style={st.tx}>{texts.tT1}</Text>
			<Inputs 
				placeholder={placeholders.p1} leyend={texts.t1}
				type="numeric" keyType="numeric"
				endEd={(e)=>{promWeight(parseFloat(e.nativeEvent.text))}}
			/>
		</View>
		{/* _______________________________________________________________SECTION TWO_________________________ */}
		{sectionTwo?(
			<View>
				<View style={st.sepa1} />
				<View style={st.sepa2} />
				<Text style={st.tx}>{texts.tT2}</Text>
				<Inputs 
					placeholder={placeholders.p2} leyend={texts.t2}
					type="numeric" keyType="numeric"
					endEd={(e)=>{occupationPeriotFunc(parseFloat(e.nativeEvent.text))}}
				/>
			</View>
		):(<View></View>)}
		{/* _______________________________________________________________SECTION THREE_________________________ */}
		{sectionThree?(
			<View>
				<View style={st.sepa1} />
				<View style={st.sepa2} />
				<DropDownList initLayer="Calidad de la hierba" list={ list } press={ forrageConsumFunc } />
			</View>
		):<View></View>}
		{/* _______________________________________________________________SECTION FOUR_________________________ */}
		{sectionFour?(
			<View>
				<View style={st.sepa1} />
				<View style={st.sepa2} />
				<SingleButton tile="Siguiente" press={ sendData }/>
			</View>
		):<View></View>}
		{/* _______________________________________________________________ERRORS SECTION______________________ */}
		<ModalV msj={ errors.e1 } visi={ er1 } setVisi={ setER1 } />
		<ModalV msj={ errors.e2 } visi={ er2 } setVisi={ setER2 } />
	</ImageBackground>);
}
const texts = {
	t1: " ",
	t2: "Periodo de ocupación",
	tT1: "EL PESO PROMEDIO DE LOS EJEMPLARES, EN KG, ES:",
	tT2: "EL PERIODO DE OCUPACIÓN EN DIAS ES:",
}
const placeholders = {
	p1: "Peso en kilogramos",
	p2: "Periodo en dias",
}
const errors = {
	e1: "El peso de los ejemplares no puede ser inferior a 10 kilos",
	e2: "Ha ocurrido un error inesperado, por favor verifique los datos  ",
}
const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		
		backgroundColor: '#fff',
	},
	tx:{
		textAlign: "center",
		fontSize: 25,
		marginLeft:10,
		marginBottom:40,
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
		marginBottom: 2,
	},
})