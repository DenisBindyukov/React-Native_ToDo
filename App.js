import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
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
        <View>
            <Navbar title={'Todo App!'}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>

                <FlatList
                    keyExtractor={item => item.id}
                    data={todos}
                    renderItem={({item}) => <Todo todo={item}  onRemove={removeTodo}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
