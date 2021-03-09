import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Modal, Alert} from 'react-native';
import {THEME} from "../theme";

export const EditMode = ({visible, onCancel, value, onSave}) => {

    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error', `value length must be 3 or more. Now ${title.trim().length} symbols.`)
        } else {
            onSave(title)
        }
    }

    return (

        <Modal visible={visible} animationType={'slide'} trasparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder={'Please enter the title'}
                    autoCompleteType={'email'}
                    autoCorrect={false}
                    maxLenght={64}
                />
                <View style={styles.buttons}>
                    <Button
                        title={'Cancel'}
                        color={THEME.DANGER_COLOR}
                        onPress={() => onCancel(false)}/>
                    <Button
                        title={'Save'}
                        onPress={saveHandler}/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
