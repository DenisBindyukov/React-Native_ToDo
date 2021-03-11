import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons'
import {THEME} from "../THEME";
import {AppTextBold} from "./AppTextBold";

export const AppButton = ({onPress, children, color = THEME.MAIN_COLOR}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>
                    {children}
                </AppTextBold>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    }
});
