import React from 'react';
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import {THEME} from "../../THEME";
import {AppTextBold} from "./AppTextBold";

export const AppButton = ({onPress, children, color = THEME.MAIN_COLOR}) => {

    // ОПРЕДИЛЕНИЕ ПЛАТФОРМЫ
    // Класс Platform озволяет сделать проверку на систему андройд или ios
    // TouchableNativeFeedback из разряда Touchable. Позволяет получить волнистый эффект при нажати.
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return (
        <Wrapper onPress={onPress} activeOpacity={0.9}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>
                    {children}
                </AppTextBold>
            </View>
        </Wrapper>
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
