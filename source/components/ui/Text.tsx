import React, { PropsWithChildren } from 'react'
import { StyleProp, StyleSheet, TextProps as NativeTextProps, TextStyle as NativeTextStyle } from 'react-native'
import { Text as PaperText } from 'react-native-paper'
import { useThemeStyles } from '../../logic/themeHooks'
import { fontSizeStyles, fontStyles } from '../../styles/fontStyles'

export type Replace<TSource, TReplacement extends { [K in keyof TSource]?: any }> =
    Omit<TSource, keyof TReplacement>
    & TReplacement

export type TextStyle =
    Replace<NativeTextStyle, {

        fontFamily?: never


        fontWeight?: never
    }>

export type TextSizeProps = {
    size?: NativeTextStyle['fontSize']

    smallest_10?: boolean


    smaller_12?: boolean


    small_14?: boolean


    normal_16?: boolean


    large_18?: boolean

    larger_20?: boolean


    largest_22?: boolean
}

export type TextWeightProps = {

    regular_400?: boolean


    medium_500?: boolean


    semiBold_600?: boolean


    bold_700?: boolean
}

export type TextTransformProps = {
    upperCase?: boolean

    lowerCase?: boolean

    capitalize?: boolean
}

export type TextColorProps = {
    primary?: boolean

    accent?: boolean

    secondary?: boolean

    error?: boolean

    link?: boolean

    onPrimary?: boolean

    onAccent?: boolean

    onPrimaryDim?: boolean
}

export type TextPropsBase =
    Replace<NativeTextProps, { style?: StyleProp<TextStyle> }>
    & {
        nested?: boolean
    }

export type TextProps = PropsWithChildren< //
    TextPropsBase
    & TextSizeProps
    & TextWeightProps
    & TextTransformProps
    & TextColorProps
    & Pick<NativeTextStyle, 'lineHeight'>>

/**
 * NOTE: Caveats
 * - All nested text components must have the `nested` flag.
 * - If multiple flags are `true` for the same property, the last one wins - ordered by
 * {@link TextSizeProps}, {@link TextWeightProps}, {@link TextTransformProps} or {@link TextColorProps} accordingly.
 */
export const Text =
    ({
        smallest_10, smaller_12, small_14, normal_16, large_18, larger_20, largest_22,
        size, lineHeight,
        regular_400, medium_500, semiBold_600, bold_700,
        upperCase, lowerCase, capitalize,
        primary, accent, secondary, error, link, onPrimary, onAccent, onPrimaryDim,
        nested,
        style,
        ...passProps
    }: TextProps) => {
        const themeStyles = useThemeStyles()

        let fontFamilyWeighted: Pick<NativeTextStyle, 'fontFamily'> | undefined = undefined

        if (regular_400) {
            fontFamilyWeighted = fontStyles.regular_400
        } else if (medium_500) {
            fontFamilyWeighted = fontStyles.medium_500
        } else if (semiBold_600) {
            fontFamilyWeighted = fontStyles.semiBold_600
        } else if (bold_700) {
            fontFamilyWeighted = fontStyles.bold_700
        }

        if (size === undefined) {
            if (smallest_10) {
                size = fontSizeStyles.smallest_10.fontSize
            } else if (smaller_12) {
                size = fontSizeStyles.smaller_12.fontSize
            } else if (small_14) {
                size = fontSizeStyles.small_14.fontSize
            } else if (normal_16) {
                size = fontSizeStyles.normal_16.fontSize
            } else if (large_18) {
                size = fontSizeStyles.large_18.fontSize
            } else if (larger_20) {
                size = fontSizeStyles.larger_20.fontSize
            } else if (largest_22) {
                size = fontSizeStyles.largest_22.fontSize
            }
        }

        // Fall back to default props
        if (!nested) {
            fontFamilyWeighted = fontFamilyWeighted ?? fontStyles.regular_400
            size = size ?? fontSizeStyles.normal_16.fontSize
            lineHeight = lineHeight ?? (size * 1.5)
        }

        return (
            //@ts-ignore
            <PaperText
                style={[
                    fontFamilyWeighted,

                    { fontSize: size },
                    { lineHeight },

                    // Transform
                    upperCase && styles.upperCase,
                    lowerCase && styles.lowerCase,
                    capitalize && styles.capitalize,

                    // Color
                    primary && themeStyles.textPrimary,
                    accent && themeStyles.textAccent,
                    secondary && themeStyles.textSecondary,
                    error && themeStyles.textError,
                    link && themeStyles.textLink,
                    onPrimary && themeStyles.textOnPrimary,
                    onAccent && themeStyles.textOnAccent,
                    onPrimaryDim && themeStyles.textOnPrimaryDim,

                    style
                ]}
                {...passProps}
            />
        )
    }

const styles = StyleSheet.create({
    upperCase: {
        textTransform: 'uppercase'
    },
    lowerCase: {
        textTransform: 'lowercase'
    },
    capitalize: {
        textTransform: 'capitalize'
    }
})