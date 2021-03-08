import React from 'react';
import {StyleSheet, View} from 'react-native';

export const AppCard = (props) => {

    return (
        <View style={{...styles.default, ...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000', //  shadows for iphone
        shadowOpacity: 0.3,  // shadows for iphone
        shadowOffset: {width: 2, height: 2},  // shadows for iphone
        elevation: 8, // shadows for android
        backgroundColor: '#fff',
        borderRadius: 10
    }
});
