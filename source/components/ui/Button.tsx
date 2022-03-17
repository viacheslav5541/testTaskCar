import React, { ComponentProps, ReactText } from 'react'
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { observer } from 'mobx-react-lite'
import { useTheme, useThemeStyles } from '../../logic/themeHooks'
import { fontStyles } from '../../styles/fontStyles'
import { atomicStyles } from '../../styles/atomicStyles'

type PaperButtonProps = Omit<ComponentProps<typeof PaperButton>, 'mode' | 'color' | 'theme' | 'contentStyle' | 'children'>

type ButtonColorProps = {
    primary?: boolean

    accent?: boolean

    link?: boolean

    error?: boolean

    outlined?: boolean
}


export type ButtonProps =
    PaperButtonProps
    & ButtonColorProps
    & {
        outlined?: boolean

        large?: boolean

        contentSize?: Partial<Pick<ViewStyle, 'width' | 'minWidth' | 'maxWidth' | 'height' | 'minHeight' | 'maxHeight'>>

        children: ReactText
    }

export const Button =
    observer(
        ({
            outlined,
            large, contentSize,
            primary, accent, link,
            style, labelStyle, error,
            ...passProps
        }: ButtonProps) => {
            const theme = useTheme()
            const themeStyles = useThemeStyles()

            let color: string | undefined = undefined
            let labelColorStyle: Pick<TextStyle, 'color'> | undefined = undefined
            let backgroundStyle: Pick<ViewStyle, 'backgroundColor'> | undefined = undefined
            let borderStyle: StyleProp<Pick<ViewStyle, 'borderWidth' | 'borderColor'>> | undefined = undefined

            if (outlined) {
                // NOTE: This means text color only for outlined and text buttons
                color = primary
                    ? theme.colors.primary
                    : accent
                        ? theme.colors.accent
                        : error
                            ? theme.colors.error
                            : undefined

                borderStyle = [
                    atomicStyles.borderOne,
                    primary
                        ? themeStyles.borderPrimary
                        : accent
                            ? themeStyles.borderAccent
                            : undefined
                ]
            } else {
                labelColorStyle = primary
                    ? themeStyles.textOnPrimary
                    : accent
                        ? themeStyles.textOnAccent
                        : undefined

                backgroundStyle = primary
                    ? themeStyles.backgroundPrimary
                    : accent
                        ? themeStyles.backgroundAccent
                        : link
                            ? themeStyles.backgroundLink
                            : error
                                ? themeStyles.backgroundError
                                : undefined
            }
            return (
                <PaperButton
                    mode={outlined ? 'outlined' : 'contained'}
                    color={color}
                    style={[styles.button, backgroundStyle, borderStyle, style]}
                    contentStyle={[large ? styles.contentLarge : styles.content, contentSize]}
                    labelStyle={[styles.label, labelColorStyle, labelStyle]}
                    {...passProps}
                />
            )
        })

const styles = StyleSheet.create({
    button: {
        elevation: 0
    },
    content: {
        height: 50
    },
    contentLarge: {
        height: 55
    },
    label: {
        ...fontStyles.semiBold_600,
        fontSize: 16,
        lineHeight: 22
    }
})