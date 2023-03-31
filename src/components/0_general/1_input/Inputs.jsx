import { View, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Inputs( props ) {
	const {
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
	} = props;
	return (
		<View style={ st.container }>
			<Text style={ st.ley }>{ leyend }</Text>
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
		</View>
	);
}
const st = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	ley:{
		width: 300,

		fontSize: 25,
		color: "white",

		zIndex: 1,
	},
	input:{
		width: 300,
		height: 40,

		fontSize: 25,
		backgroundColor: "white",
		borderRadius: 10,

		marginTop: 20,

		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 20,
		paddingRight: 20,

		zIndex: 1,
	},
  });
