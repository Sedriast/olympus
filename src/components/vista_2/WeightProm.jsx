import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import ModalV from '../0_general/1_modal/ModalV';
import SingleButton from '../0_general/1_buttons/SingleButton';
import Inputs from '../0_general/1_input/Inputs';

export default function WeightProm( props ){
    //component props
    const { setOP, setWA, NA } =        props;
    const refN =                        (NA>0 && NA<6)?parseInt(NA):1;
    const refT =                        (NA>0 && NA<6)?texts.tT1:texts.tT2;
    const iter =                        new Array(refN).fill(false, 0, refN-1);
    iter[refN-1] =                      true;
    //******************************************************************************************************************* */
    //Events of inputs
    const [ sectionTwo, setSecTwo ]=    useState(false);
    //control error events
    const [ er1, setER1 ] =             useState(false);
    const [ er2, setER2 ] =             useState(false);
    //Memory of shippable data
    const [promWeight, setWeigth] =     useState(0);
    //******************************************************************************************************************* */
    function sumWeight(e, fina){
        if(e>10 && !fina===true){
            setWeigth(promWeight+e);
        }else if(fina===true){
            setWeigth(promWeight+e);
            setSecTwo(true);
        }else{
            setER1(true);
            setSecTwo(false);
        }
    }
    function sendData(){
        if(refN>0 && promWeight>0){
            setWA(refN*((promWeight/refN)*0.125));
            setOP(2);
        }else{
            setER2(true);
        }
    }
    //******************************************************************************************************************* */
    return (
    <View>
        {/* _______________________________________________________________SECTION ONE________________________ */}
        <Text style={st.tx}>{refT}</Text>
        {iter.map((t, i)=>
            <Inputs 
                key={i}
                placeholder={placeholders.p1} leyend={refN===1?"":texts.t1 + (i+1)}
                type="numeric" keyType="numeric"
                endEd={(e)=>{sumWeight(parseFloat(e.nativeEvent.text), t)}}
            />)}
        {/* _______________________________________________________________SECTION TWO_________________________ */}
        {sectionTwo?(
        <View style={st.btn}>
            <SingleButton press={sendData}/>
        </View>
        ):<View></View>}
        {/* _______________________________________________________________ERRORS SECTION______________________ */}
        <ModalV msj={errors.e1} visi={er1} setVisi={setER1} />
        <ModalV msj={errors.e2} visi={er2} setVisi={setER2} />
    </View>);
}
const texts = {
    t1: "Ejemplar ",
    tT1: "LOS PESOS, DE CADA EJEMPLAR, EN KG SON:",
    tT2: "EL PESO PROMEDIO DE LOS EJEMPLARES, EN KG, ES:",
}
const placeholders = {
    p1: "Peso en kilogramos",
}
const errors = {
    e1: "El peso de los ejemplares no puede ser inferior a 10 kilos",
    e2: "Ha ocurrido un error inesperado, por favor verifique los datos  ",
}
const st = StyleSheet.create({
    btn:{
        width:250,
		height: 100,
        marginTop:40,
        marginLeft:55,
        borderRadius:100,
    },
    tx:{
        textAlign: "center",
        fontSize: 35,
        marginLeft:10,
        marginBottom:40,
    },
})