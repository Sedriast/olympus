import { View, StyleSheet, ImageBackground, Text, FlatList } from 'react-native';
import { useState } from 'react';

import Inputs from '../0_general/1_input/Inputs';
import SingleButton  from '../0_general/1_buttons/SingleButton';
import ModalV from '../0_general/1_modal/ModalV';

import backimg from '../../../assets/back.png';
import Lists from '../0_general/1_flatList/Lists';

export default function AreaEP( props ){
    //component props
    const { nav, setAN, setArea_ } = props;
    //******************************************************************************************************************* */
    //Events of inputs
    const [ sectionTwo,     setSecTwo ] =   useState(false);
    const [ sectionThree,   setSecThree ] = useState(false);
    const [ sectionFour,    setSecFour ] =  useState(false);
    //control error events
    const [ er1, setER1 ] =                 useState(false);
    const [ er2, setER2 ] =                 useState(false);
    const [ er3, setER3 ] =                 useState(false);
    //Memory of shippable data
    const [ areaEF, setArea ] =             useState(1);
    const [ width_, setWidth ] =            useState(1);
    const [ length_, setLength ] =          useState(1);
    //******************************************************************************************************************* */
    function terrainArea(e){
        if(e>0){
            setArea_(e);
            setSecTwo(true);
        }else{
            setArea_("");
            setSecTwo(false);
            if(sectionThree){
                setSecThree(false);
            }
            setER1(true);
        }
    }
    function terrainArea1(e1){
        if(e1>1){
            setWidth(e1);
        }else{
            setSecThree(false);
            setER2(true);
        }
    }
    function terrainArea2(e2){
        if(e2>1){
            setLength(e2);
            setSecThree(true);
        }else{
            setSecThree(false);
            setER2(true);
        }
    }
    function sendData(){
        if((length_>0&&width_>0)&&areaEF>0){
            setLength_(length_ );
            setWidth_(width_);
            setAN(areaEF);
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
                    chText={e=>terrainArea(parseFloat(e).toFixed(2))}
                />
            </View>
            {/* _____________________________________SECTION TWO___________________________ */}
            {sectionTwo?(
            <View>
                <View style={st.sepa1}></View>
                <View style={st.sepa2}></View>
                <Lists items={list}/>
            </View>):<View></View>}
            {/* _____________________________________SECTION THREE_________________________*/}
            {sectionThree?(
            <View>
                <View style={st.sepa1} />
                <View style={st.sepa2} />
                <Inputs
                    placeholder={placeholders.p2} leyend={texts.t2}
                    type="numeric" keyType="numeric"
                    value={areaEF}
                    chText={e=>bovineNumber(parseFloat(e).toFixed())}
                />
            </View>):<View></View>}
            {/* _____________________________________SECTION FOUR_________________________ */}
            {sectionFour?(
            <View>
                <View style={st.sepa1} />
                <View style={st.sepa2} />
                <SingleButton press={sendData}/>
            </View>):<View></View>}
            {/* _____________________________________ERRORS SECTION________________________ */}
            <ModalV msj={errors.e1} visi={er1} setVisi={setER1} />
            <ModalV msj={errors.e2} visi={er2} setVisi={setER2} />
            <ModalV msj={errors.e3} visi={er3} setVisi={setER3} />
        </ImageBackground>
    );
}
const list = [
    {   key: "Kikuyo",
        sleep: 35,
    },
    {   key: "Ryegrass",
        sleep: 35,
    },
    {   key: "Carreton rojo",
        sleep: 35,
    },
    {   key: "Carreton blanco",
        sleep: 35,
    },
]
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
});