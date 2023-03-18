import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

export default function Lists ( props ) {
    const { items, setForraje } = props;
    return (
    <View style = { st.container }>
        <FlatList
            data={items}
            renderItem={({item}) => <Text>{item.key}</Text>}
            keyExtractor={item => console.log(item)}
        />
    </View>
    );
}
const st = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
