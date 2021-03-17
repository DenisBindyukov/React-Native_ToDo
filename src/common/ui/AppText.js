import React from 'react';
import {StyleSheet, Text} from 'react-native';


export const AppText = (props) => {

    return (
        // Деструктуризация для стилей которые придут из пропсов и перезотрут дефолтные стили
        <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
default: {
    fontFamily: 'roboto-regular'
}
});
