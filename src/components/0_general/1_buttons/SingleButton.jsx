import { Button, } from 'react-native';

export default function SingleButton( props ) {
    const { tile, press } = props;

    return  <Button
                title={tile}
                onPress={press}>
            </Button>
}
