import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {THEME} from '../THEME';
import {AppTextBold} from "../common/ui/AppTextBold";

export const Navbar = ({title}) => {

    // ОПРЕДИЛЕНИЕ ПЛАТФОРМЫ
    // метод select при запуске приложение делает проверку на систему ios ли android и тем самым задает нужнеое значение платформе,
    // т.е стиль заранее созданный в StyleSheet.creat()

    return (
        <View style={{
            ...styles.navbar, ...Platform.select({
                ios: styles.navbarIos,
                android:  styles.navbarAndroid
            })
        }}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 10
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 20
    }
});
