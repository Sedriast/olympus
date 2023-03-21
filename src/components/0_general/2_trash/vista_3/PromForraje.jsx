import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import Inputs from '../../1_input/Inputs';
import SingleButton from '../../1_buttons/SingleButton';
import ModalV from '../../1_modal/ModalV';
import SwitchV from '../../1_switch/SwitchV';

import backimg from '../../../assets/back.png';

export default function PromForraje( props ){
    //component props
    const { nav, setFV, setPL } =             props;
    const [iter, setIter] =                     useState([]);
    //******************************************************************************************************************* */
    //Events of inputs
    const [ val, setVal ] =                     useState(0);
    const [ sectionThree, setSecThree ] =       useState(false);
    const [ enabledSwitch, setEnabled ] =       useState(false);
    const toggleSwitch = () =>                  setEnabled(previousState => !previousState)
    //control error events
    const [er1, setER1] =                       useState(false);
    const [er2, setER2] =                       useState(false);
    const [er3, setER3] =                       useState(false);
    const [er4, setER4] =                       useState(false);
    //Memory of shippable data
    const [ sumSamplesFV, setSample ] =         useState(0);
    //******************************************************************************************************************* */
    function numberSamples(e) {
        if(e>0 && e<11){
            const ref =                         new Array(parseInt(e)).fill(false, 0, parseInt(e)-1);
            ref[e-1] =                          true;
            setVal(e);
            setIter(ref);
        }else if(e>10){
            const ref =                        new Array(9).fill(false, 0, 9);
            ref[9] =                           true;
            setVal(10);
            setIter(ref);
            setER3(true);
        }else{
            const iter =                        [];
            setVal(0);
            setIter(iter);
            if(sectionThree){
                setSecThree(false);
            }
            setER3(true);
        }
    }
    function sumSamples(e, fina){
        console.log(e, fina);
        if(e>0 && !fina){
            setSample(sumSamplesFV+parseFloat(e));
        }else if(fina){
            setSample(sumSamplesFV+parseFloat(e));
            setSecThree(true);
        }else{
            setER2(true);
            setSecThree(false);
        }
    }
    function sendData(){
        if(sumSamplesFV>0){
            setFV(sumSamplesFV/iter.length);
            setPL(enabledSwitch);
            nav.navigate("report");
        }else{
            setER4(true);
        }
    }
    //******************************************************************************************************************* */
    return  (
    <ImageBackground source={backimg} resizeMode="cover" style={st.container}>
        <View style={st.com}>
            <ScrollView>
                {/* _______________________________________________________________SECTION ONE________________________ */}
                <Text style={st.tx1}>{texts.tT1}</Text>
                <SwitchV  textRigth="No" setEnabled={toggleSwitch} enabled={enabledSwitch} textLeft="Si"/>
                <View style={st.tir}>
                    <Inputs
                        placeholder={placeholders.p1} leyend={texts.t1}
                        type = "numeric" keyType="numeric"
                        value={val}
                        chText={(e)=>{numberSamples(parseFloat(e).toFixed())}}
                    />
                </View>
                {/* _______________________________________________________________SECTION TWO________________________ */}
                {iter.map((t,i)=>{return(
                <Inputs 
                    key={texts.t2 + (i+1)}
                    placeholder={placeholders.p2} leyend={texts.t2 + (i+1)}
                    type="numeric" keyType="numeric"
                    endEd={(e)=>{sumSamples(parseFloat(e.nativeEvent.text), t)}}
                />)}
                )}
            </ScrollView>
            {/* _______________________________________________________________SECTION THREE________________________ */}
            {sectionThree?(
            <View>
                <View style={st.sepa1}></View>
                <View style={st.sepa2}></View>
                <SingleButton press={sendData}/>
            </View>
            ):<View></View>}
            {/* _______________________________________________________________ERRORS SECTION______________________ */}
            <ModalV msj={errors.e1} visi={er1} setVisi={setER1} />
            <ModalV msj={errors.e2} visi={er2} setVisi={setER2} />
            <ModalV msj={errors.e3} visi={er3} setVisi={setER3} />
            <ModalV msj={errors.e4} visi={er4} setVisi={setER4} />
        </View>
    </ImageBackground>);
}
const texts = {
    t1: "NÚMERO DE MUESTRAS FORRAJE VERDE",
    t2: "Muestra ",
    tT1: "¿Pastoreo libre?",
}
const placeholders = {
    p1: "Muestras",
    p2: "Forraje/metro cuadrado",
}
const errors = {
    e1: "El número de muestras es incorrecto",
    e2: "Debe escribir todas las muestras",
    e3: "El número de muestras de forraje debe ser mayor a 0 y menor a 10",
    e4: "Ha ocurrido un error inesperado, por favor verifique los datos",
}
const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: '#fff',
    },
    com:{
        flex:0.8,
    },
    tir:{
        marginBottom: 50,
    },
    tx1:{
        fontSize: 35,
        marginLeft:70,
    },
    tx2:{
        textAlign:"center",
        fontSize: 35,
        marginTop:40,
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
})