import { View, Text, StyleSheet } from 'react-native'

export default function Report2({ diasTolerancia, numLotes, longLotes, franja, avanceDia, m4h}){
    return  <View style={st.cont}>
        <Text style={st.tx1}>El terreno puede llegar a soportar {diasTolerancia.toFixed()} días</Text>
        <Text style={st.tx1}>Se pueden llegar a  armar {numLotes.toFixed()} lotes de {longLotes} metros caudrados (M2)</Text>
        {franja?<View></View>:<View><Text style={st.tx1}>Se debe mover la franja {parseFloat(avanceDia).toFixed(2)*100} metros, cada dia</Text>
        <Text style={st.tx1}>Se debe mover la franja {parseFloat(m4h).toFixed(2)*100} metros, cada 4 horas </Text></View>}
    </View>
}
const st = StyleSheet.create({
    cont: {
        flex: 1,
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