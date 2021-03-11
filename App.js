import React, {useState} from 'react';
import {StyleSheet, View, Alert, ImageBackground, SafeAreaView, Text, StatusBar} from 'react-native';
import {useFonts} from 'expo-font';

import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {THEME} from "./src/THEME";
import {TodoScreen} from "./src/screens/TodoScreens";


export default function App() {

    let [fontsLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    });

    const [todos, setTodos] = useState([
        {id: '1', title: 'Learn to React Native'},
        {id: '2', title: 'Learn to React '},
    ])
    const [todoId, setTodoId] = useState(null)
    const [isReady, setIsReady] = useState(false)


    const addTodo = (title) => {

        setTodos((state) => [
            {
                id: Date.now().toString(),
                title
            },
            ...state])
    }

    const updateTodo = (id, title) => {
        setTodos(state =>
            state.map(todo => {
                if (todo.id === id) {
                    todo.title = title
                }
                return todo
            }))
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
                        setTodoId(null)
                        setTodos((state) => state.filter((todo) => todo.id !== id))
                    }
                }
            ],
            {cancelable: false}
        );
    }

    let content = <MainScreen
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
        openTodo={setTodoId}/>

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


    if (todoId) {

        const selected = todos.find(t => t.id === todoId)

        content = <TodoScreen
            onRemove={removeTodo}
            todo={selected}
            onSave={updateTodo}
            goBack={() => {
                setTodoId(null)
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
