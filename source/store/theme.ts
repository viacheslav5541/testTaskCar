import { DefaultTheme } from 'react-native-paper'

export type AppColors =
    Readonly<typeof DefaultTheme.colors & {

        surfaceSecondary: string

        border: string

        borderSecondary: string

        secondary: string

        onAccent: string

        onPrimary: string

        onPrimaryDim: string

        link: string
    }>

export type AppTheme =
    Readonly<typeof DefaultTheme & {
        colors: AppColors
    }>

const baseColors = {
    primary: '#02B5AD',
    accent: '#FF1F4E',
    error: '#FF0034',
    link: '#416FD5'
}




const commonColors = {
    ...baseColors,
    notification: baseColors.accent,
    backdrop: baseColors.primary,

    onAccent: '#FFF',
    onPrimary: '#FFF',
    onPrimaryDim: baseColors.primary
}

export const createTheme =
    (): AppTheme => {
        const secondary = '#A1A6B2'

        const text = '#152A3F'

        return {
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                ...commonColors,

                background: '#FFF',
                surface: '#DDE1EC',
                surfaceSecondary: '#F8F8FB',

                border: '#B2B3B3',
                borderSecondary: '#DFDFDF',



                text,
                secondary,
                placeholder: secondary,

                onSurface: text
            }
        }
    }