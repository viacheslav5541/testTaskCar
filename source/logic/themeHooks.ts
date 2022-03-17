import { useStore } from "./storeHook"

export const useTheme = () => useStore().theme

export const useThemeStyles = () => useStore().themeStyles