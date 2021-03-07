import React, {useState} from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {

    const [todos, setTodos] = useState([])

    const addTodo = (title) => {

        setTodos((state) => [
            {
                id: Date.now().toString(),
                title
            },
            ...state])
    }

    const removeTodo = (id) => {
        setTodos( (state) => state.filter((todo) => todo.id !== id))
    }

    return (
        <View style={styles.appContainer}>
            <Navbar title={'Todo App!'}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>

                <FlatList
                    data={todos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Todo todo={item}  onRemove={removeTodo}/>}
                />
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
