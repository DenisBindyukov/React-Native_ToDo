import React from 'react';
import {FlatList, StyleSheet, View, Text, Image} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {

    let content = (
        <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>)}
        />
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.img} source={require('../../assets/no-items.png')}/>
            </View>

            // <Image
            //     style={styles.imgWrap}
            //     source={ {uri: 'https://senior.ua/storage/article/content/ab78bc8c-3690-4fbc-b1ec-1c61779241de.jpeg'} }
            //     />
        )
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    imgWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 300,
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    }

});
