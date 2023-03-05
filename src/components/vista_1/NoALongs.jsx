import { View, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';

import Inputs from '../0_general/1_input/Inputs'; 
import SingleButton  from '../0_general/1_buttons/SingleButton';
import ModalV from '../0_general/1_modal/ModalV';
import SwitchV from '../0_general/1_switch/SwitchV';

import backimg from '../../../assets/back.png';

export default function NoALongs( props ){
    //component props
    const { nav, setAN, setLength_, setWidth_ } = props;
    //******************************************************************************************************************* */
    //Events of inputs
    const [ sectionTwo,     setSecTwo ] =   useState(false);
    const [ sectionThree,   setSecThree ] = useState(false);
    //control error events
    const [ er1, setER1 ] =                 useState(false);
    const [ er2, setER2 ] =                 useState(false);
    const [ er3, setER3 ] =                 useState(false);
    //Memory of shippable data
    const [ cattle, setCattle ] =           useState();
    const [ width_, setWidth ] =            useState(1);
    const [ length_, setLength ] =          useState(1);
    //******************************************************************************************************************* */
    function bovineNumber(e){
        if(e>0 && e<100){
            setCattle(e);
            setSecTwo(true);
        }else{
            setCattle("");
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
        if((length_>0&&width_>0)&&cattle>0){
            setLength_(length_ );
            setWidth_(width_);
            setAN(cattle);
            nav.navigate("second");
        }else{
            setER3(true);
        }
    }
    //******************************************************************************************************************* */
    return( 
        <ImageBackground source={backimg} resizeMode="cover" style={st.container}>
            {/* __________________________________________________________________SECTION ONE________________________ */}
            <View>
                <Inputs
                    placeholder={placeholders.p1} leyend={texts.t1}
                    type="numeric" keyType="numeric"
                    value={cattle}
                    chText={e=>bovineNumber(parseFloat(e).toFixed())}
                />
            </View>
            {/* _________________________________________________________________SECTION TWO_________________________ */}
            {sectionTwo?( 
               
            <View> 
                <View style={st.sepa1}></View>
                <View style={st.sepa2}></View>
                <View>
                    <Inputs
                        placeholder={placeholders.p2} leyend={texts.t2}
                        type="numeric" keyType="numeric"
                        endEd={e=>terrainArea1(parseFloat(e.nativeEvent.text))}
                    />
                </View>
                <View>
                    <Inputs
                        placeholder={placeholders.p3} leyend={texts.t3}
                        type="numeric" keyType="numeric"
                        endEd={e=>terrainArea2(parseFloat(e.nativeEvent.text))}
                    />
                </View>
            </View>):<View></View>}
            {/* _______________________________________________________________SECTION THREE_________________________ */}
            {sectionThree?(
            <View>
                <View style={st.sepa1} />
                <View style={st.sepa2} />
                <SingleButton press={sendData}/>
            </View>):<View></View>}
            {/* _______________________________________________________________ERRORS SECTION________________________ */}
            <ModalV msj={errors.e1} visi={er1} setVisi={setER1} />
            <ModalV msj={errors.e2} visi={er2} setVisi={setER2} />
            <ModalV msj={errors.e3} visi={er3} setVisi={setER3} />
        </ImageBackground>
    );
}
const texts = {
    t1: "El número de ejemplares bovinos es:",
    t2: "El ancho de la finca en metros es:",
    t3: "El largo de la finca en metros es:",
}
const placeholders = {
    p1: "Número de bovinos",
    p2: "Ancho de la finca",
    p3: "Largo de la finca",
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