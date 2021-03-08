import React from 'react';
import {StyleSheet, View, Button, TextInput, Modal} from 'react-native';

export const EditMode = ({visible, onCancel}) => {

    return (

        <Modal visible={visible} animationType={'slide'}>
            <View style={styles.wrap}>
                <TextInput/>
                <Button title={'Cancel'} onPress={() => onCancel(false)}/>
                <Button title={'Save'}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
