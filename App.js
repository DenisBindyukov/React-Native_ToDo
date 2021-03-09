import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreens";
import {AppButton} from "./src/components/button";
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";

export default function App() {

    const [todos, setTodos] = useState([
        {id: '1', title: 'Learn to React Native'},
        {id: '2', title: 'Learn to React '},
    ])
    const [todoId, setTodoId] = useState(null)

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
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
