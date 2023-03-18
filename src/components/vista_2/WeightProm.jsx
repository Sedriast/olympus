import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';

import ModalV from '../0_general/1_modal/ModalV';
import SingleButton from '../0_general/1_buttons/SingleButton';
import Inputs from '../0_general/1_input/Inputs';

import backimg from '../../../assets/back.png';

export default function WeightProm( props ){
    //component props
    const { nav, setWA, NA } =          props;
    const refN =                        (NA>0 && NA<6)?parseInt(NA):1;
    const iter =                        new Array(refN).fill(false, 0, refN-1);
    iter[refN-1] =                      true;
    //******************************************************************************************************************* */
    //Events of inputs
    const [ sectionTwo, setSecTwo ]=    useState(false);
    //control error events
    const [ er1, setER1 ] =             useState(false);
    const [ er2, setER2 ] =             useState(false);
    //Memory of shippable data
    const [summWeight, setWeigth] =     useState(0);
    //******************************************************************************************************************* */
    function sumWeight(e, fina){
        if(e>10 && !fina===true){
            setWeigth(summWeight+e);
        }else if(fina===true){
            setWeigth(summWeight+e);
            setSecTwo(true);
        }else{
            setER1(true);
            setSecTwo(false);
        }
    }
    function sendData(){
        if(refN>0 && summWeight>0){
            setWA(summWeight/refN);
            nav.navigate("third");
        }else{
            setER2(true);
        }
    }
    //******************************************************************************************************************* */
    return (
    <ImageBackground source={backimg} resizeMode="cover" style={st.container}>
        {/* _______________________________________________________________SECTION ONE________________________ */}
        <Text style={st.tx}>{texts.tT1}</Text>
        <Inputs 
            key={i}
            placeholder={placeholders.p1} leyend={texts.t1}
            type="numeric" keyType="numeric"
            endEd={(e)=>{sumWeight(parseFloat(e.nativeEvent.text), t)}}
        />
        {/* _______________________________________________________________SECTION TWO_________________________ */}
        {sectionTwo?(
            <View>
                <View style={st.sepa1}></View>
                <View style={st.sepa2}></View>
                <FlatList
                    data={list}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        ):<View></View>}
        {/* _______________________________________________________________SECTION TWO_________________________ */}
        {sectionTwo?(
        <View>
            <View style={st.sepa1}></View>
            <View style={st.sepa2}></View>
            <SingleButton press={sendData}/>
        </View>
        ):<View></View>}
        {/* _______________________________________________________________ERRORS SECTION______________________ */}
        <ModalV msj={errors.e1} visi={er1} setVisi={setER1} />
        <ModalV msj={errors.e2} visi={er2} setVisi={setER2} />
    </ImageBackground>);
}
const texts = {
    t1: "Ejemplar ",
    tT1: "EL PESO PROMEDIO DE LOS EJEMPLARES, EN KG, ES:",
}
const placeholders = {
    p1: "Peso en kilogramos",
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
        fontSize: 35,
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