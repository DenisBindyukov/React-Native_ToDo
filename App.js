import React, {useReducer, useState} from 'react';
import {StyleSheet, View, Alert, ImageBackground, SafeAreaView, Text, StatusBar} from 'react-native';
import {useFonts} from 'expo-font';

import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {THEME} from "./src/THEME";
import {TodoScreen} from "./src/screens/TodoScreens";
import {
    deleteTodoAC,
    todoReducer,
    addTodoAC,
    updateTodoAC,
    initializeState,
    setValueId
} from "./src/redusers/todoReducer";


export default function App() {

    let [fontsLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    });

    const [state, dispatch] = useReducer(todoReducer,initializeState)


    const addTodo = (title) => {
        dispatch(addTodoAC(title))
    }
const updateTodo = (id, title) => {
    dispatch(updateTodoAC(id, title))
}

const screenSetTodoID = value => {
    dispatch(setValueId(value))
}

    const removeTodo = (id) => {

        const selectedTodo = todos.find(td => td.id === id)

        Alert.alert(
            'Remove To do element',
            `Are you sure yo want to delete ${selectedTodo.title}`,
            [
                {
                    text: 'Cancel',
                    style: 'negative'
                },
                {
                    text: 'OK',
                    style: 'positive',
                    onPress: () => {
                        screenSetTodoID(null)
                        dispatch(deleteTodoAC(id))
                    }
                }
            ],
            {cancelable: false}
        );
    }

    let content = <MainScreen
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={state.todo}
        openTodo={screenSetTodoID}/>

    if (!fontsLoaded) {
        // Страница загрузки приложения
        return (
            <SafeAreaView style={styles.statusBar}>
                <ImageBackground style={styles.bg} resizeMode="cover" source={require('./assets/no-items.png')}>
                    <View style={styles.wrapperDowlandFonts}>
                        <Text> Загрузка шрифтов... </Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }


    if (state.todoId) {

        const selected = state.todo.find(t => t.id === state.todoId)

        content = <TodoScreen
            onRemove={removeTodo}
            todo={selected}
            onSave={updateTodo}
            goBack={() => {
                screenSetTodoID(null)
            }}/>
    }

    return (
        <View style={styles.appContainer}>
            <Navbar title={'Todo App!'}/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        // На ширину всего экрана
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20
    },
    statusBar: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    bg: {
        flex: 1
    },
    wrapperDowlandFonts: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20,
    }
});
