import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        onSubmit(value)
        setValue('')
    }


    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder={'Inter value'}
            />
            {/*// keyboardType={'numeric'}*/}
            <Button title={'Add'} onPress={pressHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'

    }
});
