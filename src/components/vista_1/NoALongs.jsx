import { View} from 'react-native';
import { useState } from 'react';

import  Inputs from '../0_general/1_input/Inputs'; 
import  SingleButton  from '../0_general/1_buttons/SingleButton';
import ModalV from '../0_general/1_modal/ModalV';
import SwitchV from '../0_general/1_switch/SwitchV';

export default function NoALongs({setOP, setAN, setM2}){
    //******************************************************************************************************************* */
    //Events of inputs
    const [ sectionTwo, setSecTwo ] = useState(false);
    const [ sectionThree, setSecThree ] = useState(false);
    const [enabledSwitch, setEnabled] = useState(false);
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
            setM1(true);
        }
    }

    function terrainArea(e){
        if(e>0){
            setArea(e);
        }else{
            setArea("");
            setSecThree(false);
            setM2(true);
        }
    }
    
    function sendData(){
        if(farmArea>0&&cattle>0){
            setM2(isEnabled?farmArea*6430:farmArea*10000)
            setAN(cattle);
            setOP(1);
        }else{
            setM3(true);
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
                        value={farmArea}
                        chText={e=>terrainArea(parseFloat(e).toFixed(2))}
                    />
                </View>
                <SwitchV  textRigth="Fanegadas" setEnabled={toggleSwitch} enabled={enabledSwitch} textLeft="Hectáreas"/>
            </View>):<View></View>}

            {/* *************************section three************************* */}

            {sectionThree?(
            <View>
                <SingleButton press={sendData}/>
            </View>):<View></View>}

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

