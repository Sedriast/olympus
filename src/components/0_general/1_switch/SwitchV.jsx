import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

export default function SwitchV( props ) {

		const { textRigth, textLeft, enabled, setEnabled} = props;

		return (
				<View style={st.ley}>
						<Text style={st.tx3}>{textLeft}</Text>
						<Switch
								trackColor={{false: '#767577', true: '#81b0ff'}}
								thumbColor={enabled? '#f5dd4b' : '#f4f3f4'}
								ios_backgroundColor="#3e3e3e"
								onValueChange={setEnabled}
								value={enabled}
						/>
						<Text style={st.tx3}>{textRigth}</Text>
				</View>
		)
}
const st = StyleSheet.create({
		ley:{
				flex: 0,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				height: 50,
				fontSize: 10,
		},
		tx3:{
				fontSize: 25,
		},
})