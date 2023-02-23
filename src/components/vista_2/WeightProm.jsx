import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import ModalV from '../0_general/1_modal/ModalV';
import SingleButton from '../0_general/1_buttons/SingleButton';
import Inputs from '../0_general/1_input/Inputs';

export default function WeightProm( props ){
    const { setOP, setWA_, NA} = props;

    const [ inde, setInd ] = useState(0);
    const [u , setU] = useState(0);
    const [d , setD] = useState(0);

    const i = [];
    if(NA>0 && NA<6){
        for(let y=0; y<NA; y++){
           i.push(y)
        }
    }

    const [m1, setM1] = useState(false);
    const [wa, setWA] = useState(0.0);

    function continu(ev){
        setWA(wa+ev);
        setInd(inde+1);
    }

    function unU(ev){
        setU(ev);
        setInd(NA);
    }

    function unD(ev){
        setD(ev);
        setInd(NA);
    }

    function verify(){
        if(inde == NA){
            setWA_(NA*(((wa+u+d)/NA)*0.125));
            setOP(2);
        }else{
            error1();
        }
    }

    function error1(){
        setM1(true);
    }

    return <View>
        <ModalV msj="Debes escribir todos los pesos" visi={m1} setVisi={setM1} />
        {NA>0 && NA<6?
        (<View>
            <Text style={st.tx}>PESO DE LOS EJEMPLARES</Text>
            {i.map((e,i)=>{
                if((i+1)===parseInt(NA)||i===0){
                        return i===0?(<View key={e}>
                            <Inputs 
                                type="numeric"
                                keyType="numeric"
                                leyend="Kg"
                                chText={e=>(parseFloat(e)>0)?unU(parseFloat(e)):error1()}
                            />
                        </View>):(
                        <View key={e}>
                            <Inputs 
                                type="numeric"
                                keyType="numeric"
                                leyend="Kg"
                                chText={e=>(parseFloat(e)>0)?unD(parseFloat(e)):error1()}
                            />
                        </View>);
                }else{ return (
                <View key={e}>
                    <Inputs 
                        type="numeric"
                        keyType="numeric"
                        leyend="Kg"
                        endEd={e=>(
                            parseFloat(e.nativeEvent.text)>0)?continu(parseFloat(e.nativeEvent.text)):error1()}
                    />
                </View>);}}
                )}
            <View style={st.btn}>
                <SingleButton press={verify} />
            </View>
        </View>
    ):(
        <View>
            <Text style={st.tx}>PESO PROMEDIO DE LOS EJEMPLARES EN KG ES:</Text>
            <View >
                <Inputs 
                    type="numeric"
                    keyType="numeric"
                    leyend="Kg"
                    chText={e=>(
                        parseFloat(e)>0)?(uni(u)):error1()}
                />
            </View>
            <View style={st.btn}>
                <SingleButton press={verify} />
            </View>
        </View>)
    }
    </View>
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
        fontSize: 35,
        marginLeft:10,
        marginBottom:40,
    },
})