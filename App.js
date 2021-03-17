import React, {useEffect, useReducer} from 'react';
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
    setValueIdAC, showLoaderAC, hideLoaderAC, showErrorAC, clearErrorAC, fetchTodosAC
} from "./src/redusers/todoReducer";


export default function App() {

    useEffect(() => {
         fetchTodos()
    }, [])


    let [fontsLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    });

    const [state, dispatch] = useReducer(todoReducer, initializeState)


    const addTodo = async (title) => {
        const response = await fetch(
            'https://rn-todolist-app-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title})
            }
        )

        const data = await response.json()
        dispatch(addTodoAC(title, data.name))
    }

    const updateTodo = (id, title) => {
        dispatch(updateTodoAC(id, title))
    }

    const screenSetTodoID = value => {
        dispatch(setValueIdAC(value))
    }

    const removeTodo = (id) => {

        const selectedTodo = state.todos.find(td => td.id === id)

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

    const showLoader = () => {
        dispatch(showLoaderAC())
    }

    const hideLoader = () => {
        dispatch(hideLoaderAC())
    }

    const showError = (error) => {
        dispatch(showErrorAC(error))
    }

    const clearError = () => {
        dispatch(clearErrorAC())
    }

    const fetchTodos = async () => {
        dispatch(showLoaderAC())
        const response = await fetch('https://rn-todolist-app-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })

        // получаем из сервера объект промис и трасформируем ешго в нужный нам тип объекта.
        const data = await response.json()
        const todos = Object.keys(data).map(key => ({...data[key], id: key}))
         dispatch(fetchTodosAC(todos))
        dispatch(hideLoaderAC())
    }


    let content = <MainScreen
        loading={state.loading}
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={state.todos}
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

        const selected = state.todos.find(t => t.id === state.todoId)

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
