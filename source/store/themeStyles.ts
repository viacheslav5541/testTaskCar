import { StyleSheet } from 'react-native'

import { AppTheme } from './theme'

export const createThemeStyles = ({ colors, roundness }: AppTheme) =>
    StyleSheet.create({
        background: {
            backgroundColor: colors.background
        },
        backgroundPrimary: {
            backgroundColor: colors.primary
        },
        backgroundAccent: {
            backgroundColor: colors.accent
        },
        backgroundLink: {
            backgroundColor: colors.link
        },
        backgroundError: {
            backgroundColor: colors.error
        },
        backGroundSecondary: {
            backgroundColor: colors.secondary
        },
        backdrop: {
            backgroundColor: colors.backdrop
        },

        surface: {
            backgroundColor: colors.surface
        },
        surfaceSecondary: {
            backgroundColor: colors.surfaceSecondary
        },
        border: {
            borderColor: colors.border
        },
        borderPrimary: {
            borderColor: colors.primary
        },
        borderSecondary: {
            borderColor: colors.borderSecondary
        },
        borderAccent: {
            borderColor: colors.accent
        },
        borderError: {
            borderColor: colors.error
        },
        borderDivided: {
            borderColor: colors.borderSecondary,
            borderLeftWidth: 0,
            borderRightWidth: 0
        },

        borderRadius: {
            borderRadius: roundness
        },
        text: {
            color: colors.text
        },
        textPrimary: {
            color: colors.primary
        },
        textAccent: {
            color: colors.accent
        },
        textSecondary: {
            color: colors.secondary
        },
        textError: {
            color: colors.error
        },
        textLink: {
            color: colors.link
        },

        textOnPrimary: {
            color: colors.onPrimary
        },
        textOnAccent: {
            color: colors.onAccent
        },
        textOnPrimaryDim: {
            color: colors.onPrimaryDim
        },
        textSurface: {
            color: colors.surface
        }
    })