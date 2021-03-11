import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Alert, Keyboard} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons'


export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss() // Статический метод (из библиотеки React Native) который убирает клавиатуру после добовления элемента
        } else {
            Alert.alert('Field can not be empty')
        }
    }


    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder={'Inter value'}
                autoCorrect={false}
            />
            {/*Тип для установки клавиатуры ввода в инпут*/}
            {/*// keyboardType={'numeric'}*/}

            {/*(иконка из библиотеки expo преабразуем иконку сразу в кнопку) */}
            <SimpleLineIcons.Button name={'plus'} size={20}  color={'white'} onPress={pressHandler}>
                add
            </SimpleLineIcons.Button>
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
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'

    }
});
