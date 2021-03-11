import React from "react";
import {StyleSheet, Text} from "react-native";

// Компонента создана для того что бы не переиспользовать установку шрифтов в родительских комнонентах

export const AppTextBold = (props) => {

    return (
        <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
});
