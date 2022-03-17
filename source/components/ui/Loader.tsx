import React, { ComponentPropsWithoutRef } from "react";
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type LoaderProps = ComponentPropsWithoutRef<typeof ActivityIndicator> & {

    viewStyle?: StyleProp<ViewStyle>

    indicatorStyle?: StyleProp<ViewStyle>

}

export const Loader =
    ({ viewStyle, indicatorStyle, size }: LoaderProps) =>
        <View style={[styles.container, viewStyle]}>
            <ActivityIndicator color={'grey'} size={size ?? 'large'} style={indicatorStyle}></ActivityIndicator>
        </View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})