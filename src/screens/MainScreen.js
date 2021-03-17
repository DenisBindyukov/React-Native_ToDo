import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Image, Dimensions} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../THEME";
import {AppLoader} from "../common/ui/AppLoader";

export const MainScreen = ({addTodo, removeTodo, todos, openTodo, loading}) => {

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)


    useEffect(() => {
        const update = () => {
            const width =
                Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    }, [])

    if (loading) {
        return (
            <View style={styles.center}>
                <AppLoader/>
            </View>
        )
    }

    let content = (
        <View style={{deviceWidth}}>
            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>)}
            />
        </View>
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.img} source={require('../../assets/no-items.png')}/>
            </View>

            //Подтягивать картинку url ссылкой
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
        padding: 10,
        height: 300,
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    center: {
        flex: 1
    }

});
