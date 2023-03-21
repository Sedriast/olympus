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
    
    return (
    <ImageBackground source={backimg} resizeMode="cover" style={st.container}>
        <View style={st.cont}>
           <Text>Cantidad de potreros:              {parseFloat(paddockLog).toFixed()}</Text>
           <Text>Área de los potreros:              {parseFloat(areaPaddock).toFixed()}</Text>
           <Text>Oferta Forrajera por potrero:      {parseFloat(forragePaddock).toFixed()}</Text>
           <Text>Oferta Forrajera real por potrero: {parseFloat(realForragePaddock).toFixed()}</Text>
           <Text>Carga Animal:                      {parseFloat(animalCharge).toFixed()}</Text>
           <Text>Carga Real:                        {parseFloat(realCharge).toFixed()}</Text>
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

        alignItems: "flex-end",
        justifyContent: "center",

        paddingLeft: 20,
        paddingRight: 20,

        borderRadius: 20,
        
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