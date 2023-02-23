import { View} from 'react-native';
import { useState } from 'react';

import  Inputs from '../0_general/1_input/Inputs'; 
import  SingleButton  from '../0_general/1_buttons/SingleButton';
import ModalV from '../0_general/1_modal/ModalV';
import SwitchV from '../0_general/1_switch/SwitchV';

export default function NoALongs( props ){
    //component props
    const {setOP, setAN, setM2} = props;

    //******************************************************************************************************************* */
    //Events of inputs
    const [ sectionTwo,     setSecTwo ] =   useState(false);
    const [ sectionThree,   setSecThree ] = useState(false);
    const [enabledSwitch,   setEnabled ] =  useState(false);

    const toggleSwitch = () => setEnabled(previousState => !previousState);

    //control error events
    const [er1, setER1] = useState(false);
    const [er2, setER2] = useState(false);
    const [er3, setER3] = useState(false);

    //Memory of shippable data
    const [ cattle, setCattle ] = useState();
    const [ farmArea, setArea ] = useState();

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

    function terrainArea(e){
        if(e>0.00001){
            setArea(e);
            setSecThree(true);
        }else{
            setSecThree(false);
            setER2(true);
        }
    }
    
    function sendData(){
        if(farmArea>0&&cattle>0){
            let r = enabledSwitch?farmArea*6430:farmArea*10000;
            console.log(r);
            setM2(r);
            setAN(cattle);
            setOP(1);
        }else{
            setER3(true);
        }
    }
    //******************************************************************************************************************* */
    return( 
        <View>
            {/* *************************section one************************* */}

            <View>
                <Inputs
                    placeholder={placeholders.p1} leyend={texts.t1}
                    type="numeric" keyType="numeric"
                    value={cattle}
                    chText={e=>bovineNumber(parseFloat(e).toFixed())}
                />
            </View>

            {/* *************************section two************************* */}
            
            {sectionTwo?( 
            <View> 
                <View>
                    <Inputs
                        placeholder={placeholders.p2} leyend={texts.t2}
                        type="numeric" keyType="numeric"
                        endEd={e=>terrainArea(parseFloat(e.nativeEvent.text))}
                    />
                </View>
                <SwitchV  textRigth="Fanegadas" setEnabled={toggleSwitch} enabled={enabledSwitch} textLeft="Hectáreas"/>
            </View>):<View></View>}
            {/* *************************section three************************* */}
            {sectionThree?(
            <SingleButton press={sendData}/>
            ):<View></View>}

            {/* *************************errors section************************* */}

            <ModalV msj={errors.e1} visi={er1} setVisi={setER1} />
            <ModalV msj={errors.e2} visi={er2} setVisi={setER2} />
            <ModalV msj={errors.e3} visi={er3} setVisi={setER3} />

        </View>
    );
}
const texts = {
    t1: "El número de ejemplares bovinos es:",
    t2: "El área de la finca es:",
}

const placeholders = {
    p1: "Número de bovinos",
    p2: "Área de la finca",
}

const errors = {
    e1: "El número de ejemplares bovinos debe ser mayor a 0 y menor a 100",
    e2: "El área de la finca es incorrecta intente de nuevo ",
    e3: "Ha ocurrido un error inesperado, por favor verifique los datos  ",
}

