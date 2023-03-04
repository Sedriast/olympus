import { View, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Inputs({
	placeholder,
	leyend,
	change,
	endEd,
	type,
	keyType,
	value,
	blur_,
	focus_,
	chText,
}) {
	return (
			<View style = { st.container }>
				<Text style={st.ley}>{leyend}</Text>
				<LinearGradient
      				colors={[ 'transparent', 'white', 'white' ]}
					style={st.gr}>
					<TextInput
						style={st.input}
						autoComplete='off'
						inputMode={type}
						keyboardType={keyType}
						placeholder={placeholder}
						onChange={change}
						onBlur={blur_}
						onFocus={focus_}
						onEndEditing={endEd}
						onChangeText={chText}
						value={value}
						selectTextOnFocus={true}
					/>
				</LinearGradient>
			</View>
	);
}
const st = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	input:{
		width: 350,
		height: 40,
		fontSize: 35,
		backgroundColor: "transparent",
		borderBottomLeftRadius:10,
		borderBottomRightRadius:10,
		borderBottomColor: "black",
		paddingTop:0,
		paddingBottom:0,
		paddingLeft:20,
		paddingRight:20,
	},
	ley:{
		width: 350,
		height: 40,
		fontSize: 35,
	},
	gr:{
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	}
  });
