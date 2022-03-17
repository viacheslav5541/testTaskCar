import React, { ComponentPropsWithoutRef } from "react";
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { atomicStyles } from "../../styles/atomicStyles";
import { Button } from "./Button";
import { Text } from "./Text";

type LoadingErrorrProps = ComponentPropsWithoutRef<typeof ActivityIndicator> & {

    viewStyle?: StyleProp<ViewStyle>


    refetch: () => void

}

export const LoadingError =
    ({ viewStyle, refetch }: LoadingErrorrProps) =>
        <View style={[styles.container, viewStyle]}>
            <Text style={atomicStyles.marginBottom_20} bold_700 error>Произошла ошибка</Text>
            <Button onPress={refetch} outlined error >Загрузить заного</Button>
        </View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})