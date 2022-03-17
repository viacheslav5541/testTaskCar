import React from "react"
import { StyleProp, Text, TextStyle, ViewStyle } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

export type ModeSwitcherProps = {
    onPress: () => void

    text?: string

    style?: StyleProp<ViewStyle>

    textStyle?: TextStyle
}

export const ModeSwitcher =
    ({ onPress, text, style, textStyle }: ModeSwitcherProps) =>
        <TouchableOpacity onPress={onPress} style={[{ marginVertical: 10 }, style]}>
            <Text style={[{ fontWeight: 'bold', color: 'grey', fontSize: 20 }, textStyle]}>
                {text ?? 'Сменить режим отображения'}
            </Text>
        </TouchableOpacity>