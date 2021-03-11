import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from '../THEME';
import {AppTextBold} from "../common/AppTextBold";
export const Navbar = ({title}) => {


    return (
        <View style={styles.navbar}>
        <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});
