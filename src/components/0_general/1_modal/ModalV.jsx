import { Alert, Modal, Pressable, View, Text, StyleSheet } from 'react-native';

export default function ModalV( props ) {

    const { msj, visi, setVisi } = props;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visi}
            onRequestClose={() => {
                Alert.alert("closed");
                setVisi(!visi);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{msj}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setVisi(!visi)}>
                        <Text style={styles.textStyle}>cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
  });