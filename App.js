import React, {useState} from 'react';
import {StyleSheet, View,} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreens";

export default function App() {

    const [todos, setTodos] = useState([
        {id: '1', task: 'Learn to React Native'},
        {id: '2', task: 'Learn to React '},
    ])
    const [todoId, setTodoId] = useState(null)

    const addTodo = (task) => {

        setTodos((state) => [
            {
                id: Date.now().toString(),
                task
            },
            ...state])
    }

    const removeTodo = (id) => {
        setTodos((state) => state.filter((todo) => todo.id !== id))
    }

    // const deleteTodo = (id) => {
    //     setTodos(state => {
    //         state.filter(td => td.id !== id)
    //     })
    // }


    let content = <MainScreen
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
        openTodo={setTodoId}/>

    if (todoId) {

        const selected = todos.find(t => t.id === todoId)

        content = <TodoScreen todo={selected} goBack={() => {
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
