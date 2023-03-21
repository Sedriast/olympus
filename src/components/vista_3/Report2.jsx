import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import backimg from '../../../assets/back.png';

export default function Report2( props ){
    const {
        paddockLog,
        areaPaddock,
        forragePaddock,
        realForragePaddock,
        animalCharge,
        realCharge,} = props
    
        return  (
    <ImageBackground source={backimg} resizeMode="cover" style={st.container}>
        <View style={st.cont}>
           <Text>Cantidad de potreros:              {paddockLog}</Text>
           <Text>Área de los potreros:              {areaPaddock}</Text>
           <Text>Oferta Forrajera por potrero:      {forragePaddock}</Text>
           <Text>Oferta Forrajera real por potrero: {realForragePaddock}</Text>
           <Text>Carga Animal:                      {animalCharge}</Text>
           <Text>Carga Real:                        {realCharge}</Text>
        </View>
    </ImageBackground>)
}
const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: '#fff',
    },
    cont: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: '#36FF8A',
    },
    btn:{
        width:250,
		height: 100,
        marginTop:40,
        marginLeft:15,
        borderRadius:100,
    },
    tx1:{
        fontSize: 20,
        textAlign:"center",
    },
})