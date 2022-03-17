import React, { ComponentPropsWithoutRef } from "react";
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useThemeStyles } from "../../logic/themeHooks";
import { atomicStyles } from "../../styles/atomicStyles";
import ArrowLeftIcon from '../icons/ArrowLeftIcon.svg'
type BackButtonProps = ComponentPropsWithoutRef<typeof ActivityIndicator> & {

    style?: StyleProp<ViewStyle>

    onPress: () => void

}

export const BackButton =
    ({ style, onPress }: BackButtonProps) => {

        const themeStyles = useThemeStyles()
        return (
            <TouchableOpacity onPress={onPress} style={[styles.container, themeStyles.surface, style]}>
                <ArrowLeftIcon style={atomicStyles.alignSelfCenter} />
            </TouchableOpacity>
        )
    }


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        borderRadius: 30,
    }
})