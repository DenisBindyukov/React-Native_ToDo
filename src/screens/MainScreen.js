import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {


    return (
        <View >
            <AddTodo onSubmit={addTodo}/>

            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Todo todo={item}  onRemove={removeTodo} onOpen={openTodo}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
