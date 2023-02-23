import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import NoALongs from './src/components/vista_1/NoALongs';
import WeightProm from './src/components/vista_2/WeightProm';
import PromForraje from './src/components/vista_3/PromForraje';
import Report2 from './src/components/vista_4/Report2';

export default function App() {
  const [ op, setOP ] = useState(0);

  const [ an, setAN ] = useState(0);
  const [ m2, setM2 ] = useState(0);

  const [ fv, setFV ] = useState(0);
  const [ pl, setPL ] = useState(0);

  const [ wa, setWA ] = useState(0);

  switch(op){
    case 0:
      return <View style={styles.container}>
        <NoALongs setOP={setOP} setAN={setAN} setM2_={setM2}/>
        <StatusBar style="auto" />
      </View>
    case 1:
      return <View style={styles.container}>
        <WeightProm setOP={setOP} setWA_={setWA} NA={an} />
        <StatusBar style="auto" />
      </View>
    case 2:
      return <View style={styles.container}>
        <PromForraje setOP={setOP} setFV={setFV} setPL={setPL}/>
        <StatusBar style="auto" />
      </View>
    case 3:
      let cvfva = (fv)*0.125; 
      let constotfv_dia = cvfva*wa;
      let unk = fv*m2;
      let unk2 = unk*an;
      let dias_carga = unk/constotfv_dia;

      let m2_dia = constotfv_dia/fv ;
      let rela = m2/Math.sqrt(m2_dia);

      //******************************************** */
      let dias_tolerancia = dias_carga-(dias_carga*0.2);

      let longLotes = m2/dias_carga;
      let numLotes = m2/longLotes;

      let avance_dia = Math.sqrt(m2_dia)/rela;

      return  <Report2 
        diasTolerancia={dias_tolerancia} 
        numLotes={numLotes} 
        longLotes={longLotes.toFixed(2)}
        avanceDia={avance_dia.toFixed(2)}
        m4h={avance_dia.toFixed(2)/3}/>
    default: 
      break;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#36FF8A',
  },
});
