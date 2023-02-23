import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import Inputs from '../0_general/1_input/Inputs';
import SingleButton from '../0_general/1_buttons/SingleButton';
import ModalV from '../0_general/1_modal/ModalV';

export default function PromForraje( props ){
    const {setOP, setFV, setPL} = props;

    const [u , setU] = useState(0);
    const [d , setD] = useState(0);
    const [x , setX] = useState(0);

    const [ix,setIx] = useState([]);
    const [inde, setInde]  = useState(0);

    const [m1, setM1] = useState(false);
    const [m2, setM2] = useState(false);
    const [m3, setM3] = useState(false);
    const [fv, setFV_] = useState(0);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    }

    function nM(ev){
        const response = [];
        if(ev>0){
            if(ev<11){
                setX(ev);
            }else{
                setM3(true);
                setX(10);
            }
            for(let y=0; y<ev ; y++){
                response.push(y+1)
            }
            setIx(response);
        }
    }

    function fre(ev){
        setU(ev);
        setInde(x);
    }

    function continu(ev){
        setFV_(fv+ev);
        setInde(inde+1);
    }
    
    function verify(){
        if(inde === ix.length){
            setFV(fv+u+d/inde);
            setPL(isEnabled);
            setOP(3);
        }else{
            setM1(true);
        }
    }


    return  (<View style={st.com}>
        <ScrollView>
                <ModalV msj="No tiene muestras, por favor escriba el número de muestras que tiene" visi={m1} setVisi={setM1} />
                <ModalV msj="Debes escribir todos las muestras" visi={m2} setVisi={setM2} />
                <ModalV msj="El número máximo de muestras es 10, se limitanrán las entradas" visi={m3} setVisi={setM3} />
                <Text style={st.tx1}>¿Pastoreo libre?</Text>
                <View style={st.ley}>    
                    <Text style={st.tx3}>No</Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={st.tx3}>Si</Text>
                </View>
                <View >
                    <Inputs 
                        type="numeric"
                        keyType="numeric" 
                        leyend="NÚMERO DE MUESTRAS FORRAJE VERDE" 
                        chText={e=>{parseInt(e)>0?nM(parseInt(e)):setM1(true)}}
                        value={x}/>
                </View>
                {ix.map((e,i)=>{
                    if(e===parseInt(x)||i===0){
                        return i===0&&x!==1?(<View key={e}> 
                            <Text style={st.tx2}>MUESTRAS DE FORRAJE VERDE</Text>
                            <Inputs 
                                type="numeric"
                                keyType="numeric"
                                leyend={i+1}
                                chText={e=>(parseFloat(e)>0)?setD(e):setM1(true)}
                            />
                        </View>):(
                        <View key={e}>
                            <Inputs 
                                type="numeric"
                                keyType="numeric"
                                leyend={i+1}
                                chText={e=>(parseFloat(e)>0)?fre(parseFloat(e)):setM1(true)}
                            />
                        </View>);
                    }else{ return (
                    <View key={e}>
                        <Inputs 
                            type="numeric"
                            keyType="numeric"
                            leyend={i+1}
                            endEd={e=>(
                                parseFloat(e.nativeEvent.text)>0)?continu(parseFloat(e.nativeEvent.text)):error1()}
                        />
                    </View>);}}
                )}
                <View style={st.btn}>
                    <SingleButton press={verify} />
                </View>
            </ScrollView>
        </View>);
}
const st = StyleSheet.create({
    com:{
        flex:0.8,
    },
	ley:{
        flex: 0.45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
		height: 50,
		fontSize: 10,
        marginBottom:40,
	},
    btn:{
        width:250,
		height: 100,
        marginTop:40,
        marginLeft:55,
        borderRadius:100,
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
    tx3:{
        fontSize: 25,
    },
})