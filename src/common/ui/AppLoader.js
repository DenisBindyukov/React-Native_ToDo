import React from "react";
import {StyleSheet,View, ActivityIndicator} from "react-native";
import {THEME} from "../../THEME";


export const AppLoader = () => {

    // ActivityIndicator крутёлка загрузки которая принимает в параметрах размер и цвет.

    return (
      <View style={styles.center}>
          <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
      </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
