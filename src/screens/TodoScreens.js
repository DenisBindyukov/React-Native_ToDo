import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons'
import {THEME} from '../THEME';
import {AppCard} from "../common/ui/AppCard";
import {EditMode} from "../components/EditMode";
import {AppButton} from "../common/ui/AppButton";

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {

    const [modal, setModal] = useState(false)

    const saveHandler = async (title) => {
        await onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditMode value={todo.title} onSave={saveHandler} visible={modal} onCancel={setModal}/>

            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name="edit" size={20 } color="#fff" />
                </AppButton>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.GREY_COLOR}
                        onPress={goBack}>
                        <AntDesign name="back" size={20} color="#fff" />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.DANGER_COLOR}
                        onPress={() => onRemove(todo.id)}>
                        <FontAwesome name="remove" size={20} color="#fff" />
                    </AppButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        // Class Dimensions.get() возврощает нам ширину экрана устройства, тем самым мы можем одоптивно настраивать любые свойства css
        // делая те или инные проверки.
        //width: Dimensions.get('window').width / 3
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20
    }
});
