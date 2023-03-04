import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import NoALongs from "../components/vista_1/NoALongs";
import WeightProm from "../components/vista_2/WeightProm";
import PromForraje from "../components/vista_3/PromForraje";
import Report2 from "../components/vista_4/Report2";

const Stack = createStackNavigator(); 

export default function NavigatorStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={NoALongs} />
            <Stack.Screen name="Home" component={WeightProm} />
            <Stack.Screen name="Home" component={PromForraje} />
            <Stack.Screen name="Home" component={Report2} />
        </Stack.Navigator>
    );
}