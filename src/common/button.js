import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const AppButton = ({ onPress, title}) => (
    <TouchableOpacity  activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);


    const styles = StyleSheet.create({
        screenContainer: {
            flex: 1,
            justifyContent: "center",
            padding: 16
        },
        appButtonContainer: {
            elevation: 8,
            backgroundColor: "#009688",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
            width: '70%'
        },
        appButtonText: {
            fontSize: 18,
            color: "#fff",
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase"
        }
    });
