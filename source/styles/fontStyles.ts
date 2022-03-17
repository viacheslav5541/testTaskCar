import { StyleSheet } from 'react-native'
import { FontNames } from '../types/fontNames'


export const fontStyles = StyleSheet.create({
    regular_400: {
        fontFamily: FontNames.Regular as const
    },
    medium_500: {
        fontFamily: FontNames.Medium as const
    },
    semiBold_600: {
        fontFamily: FontNames.SemiBold as const
    },
    bold_700: {
        fontFamily: FontNames.Bold as const
    }
})

export const fontSizeStyles = StyleSheet.create({
    smallest_10: {
        fontSize: 10 as const
    },
    smaller_12: {
        fontSize: 12 as const
    },
    small_14: {
        fontSize: 14 as const
    },
    normal_16: {
        fontSize: 16 as const
    },
    large_18: {
        fontSize: 18 as const
    },
    larger_20: {
        fontSize: 20 as const
    },
    largest_22: {
        fontSize: 22 as const
    }
})