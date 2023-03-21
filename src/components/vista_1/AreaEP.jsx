import { View, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';

import Inputs from '../0_general/1_input/Inputs';
import SingleButton  from '../0_general/1_buttons/SingleButton';
import ModalV from '../0_general/1_modal/ModalV';

import backimg from '../../../assets/back.png';

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
	//Events lists
	const [ openList, setOpen ] =           						useState(false);
	const [ leyend, setLeyend ] = 									useState(list[0].key);
	//control error events
	const [ er1, setER1 ] =                 						useState(false);
	const [ er2, setER2 ] =                 						useState(false);
	const [ er3, setER3 ] =                 						useState(false);
	//Memory of shippable data
	const [ areaEF, setAreaEF ] =             						useState(1);
	const [ forrageVariety, setFV_ ] =         						useState(1);
	const [ forrageRest, setFR_ ] =         						useState(1);
	const [ aforo, setAforo ] =         							useState(1);
	//******************************************************************************************************************* */
	function terrainArea(e){
		if(e>0){
			setAreaEF(e);
			setSecTwo(true);
		}else{
			setArea("");
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
			setSecFour(false);
			setER2(true);
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
			setER3(true);
		}
	}
	//******************************************************************************************************************* */
	return( 
		<ImageBackground source={backimg} resizeMode="cover" style={st.container}>
			{/* _____________________________________SECTION ONE___________________________ */}
			<View>
				<Inputs
					placeholder={placeholders.p1} leyend={texts.t1}
					type="numeric" keyType="numeric"
					value={areaEF}
					chText={e=>terrainArea(parseFloat(e).toFixed())}
				/>
			</View>
			{/* _____________________________________SECTION TWO___________________________ */}
			{sectionTwo?(
			<View>
				<View style={st.sepa1} />
				<View style={st.sepa2} />
				<View>
					<View style={st.e}>
						<SingleButton tile={leyend} press={()=>setOpen(!openList)} /></View>
						{openList?(
						<View style={st.r}>
							{list.map((e,i)=>{
							return (
								<View key = {i} style = {st.d}>
									<SingleButton 
										tile =  {e.key}
										press = {()=>{
													forrageFunc(e.sleep, e.key);
													setLeyend(e.key);
													setOpen(!openList);}}>
												{e.key}
									</SingleButton>
								</View>
							)})}
						</View>):(<View></View>)}
					</View>
				</View>):<View></View>}
			{/* _____________________________________SECTION THREE_________________________*/}
			{sectionThree?(
			<View>
				<View style={st.sepa1} />
				<View style={st.sepa2} />
				<Inputs
					placeholder={placeholders.p2} leyend={texts.t2}
					type="numeric" keyType="numeric"
					value={aforo}
					chText={e=>aforoFunc(parseFloat(e).toFixed())}
				/>
			</View>):<View></View>}
			{/* _____________________________________SECTION FOUR_________________________ */}
			{sectionFour?(
			<View>
				<View style={st.sepa1} />
				<View style={st.sepa2} />
				<SingleButton tile="Siguiente" press={sendData}/>
			</View>):<View></View>}
			{/* _____________________________________ERRORS SECTION________________________ */}
			<ModalV msj={errors.e1} visi={er1} setVisi={setER1} />
			<ModalV msj={errors.e2} visi={er2} setVisi={setER2} />
			<ModalV msj={errors.e3} visi={er3} setVisi={setER3} />
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
	e1: "El número de ejemplares bovinos debe ser mayor a 0 y menor a 100",
	e2: "El largo o el ancho de la finca es incorrecta intente de nuevo",
	e3: "Ha ocurrido un error inesperado, por favor verifique los datos",
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
});