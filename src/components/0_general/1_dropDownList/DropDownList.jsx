import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function DropDownList( props ) {
    const { initLayer, list, press } = 						props;
    //---------------------------------------------------------------------------------------------------
    const [ openList, setOpen ] =           				useState(false);
    const [ leyend, setLeyend ] = 							useState(initLayer);
    //---------------------------------------------------------------------------------------------------
  return (
    <View >
        <TouchableOpacity onPress={ ()=>setOpen( !openList ) } style={ st.btn }>
            <Text style={ st.layerTP }>{ leyend }</Text>
        </TouchableOpacity>
        {openList?(
        <View style={ st.r }>
            {list.map(( elem, i )=>{
            return (
            <TouchableOpacity key={ i } style={ st.opts } onPress={() =>{ press(elem.sleep, elem.key); setOpen( !openList ); setLeyend(elem.key)}}>
                <Text style={ st.layerOPT }>{ elem.key }</Text>
            </TouchableOpacity>
            )})}
        </View>):(<View></View>)}
    </View>
  );
}
const st = StyleSheet.create({
		btn:{
			width: 250,
			height: 50,

			alignContent: "center",
			textAlignVertical: "certer",
			textAlign: "center",

			backgroundColor: "#28AEA8",

			borderRadius: 20,
		},
		r:{
        width: 250,

        alignContent:"center",
        textAlign: "center",

				marginTop: 10,
        
        backgroundColor: "transparent",

        borderRadius: 20,
    },
    opts:{
        width: 250,
        height: 50,

				borderRadius: 10,
				borderColor: "black",
				borderWidth: 2,

				marginTop: 5,

        alignContent:"center",
        textAlign: "center",

        backgroundColor: "#004E27",
    },
    layerTP:{
        width: 250,
        height: 50,

        textAlign:"center",
        textAlignVertical: "center",

        paddingLeft: 1,
        marginTop: 1,
        color: "#ffff",
        fontSize: 25, 
    },
    layerOPT:{
        width: 250,
        height: 45,

        textAlign:"center",
        textAlignVertical: "center",

        paddingLeft: 1,
        marginTop: 1,
        color: "#ffff",
        fontSize: 25, 
    },
});
