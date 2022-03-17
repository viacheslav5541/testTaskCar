import { observer } from "mobx-react-lite"
import React from "react"
import { View } from "react-native"
import { useTheme } from "react-navigation"
import { useLogic, useStore } from "../../logic/storeHook"
import { useThemeStyles } from "../../logic/themeHooks"
import { atomicStyles } from "../../styles/atomicStyles"
import { ServiceTypes } from "../../types/serviceTypes"
import { Button } from "../ui/Button"


export const ServicesSwitcher = observer(() => {
    const logic = useLogic()

    const store = useStore()

    const theme = useTheme()

    const themeStyles = useThemeStyles()

    if (store.selectedServices.length > 0) return null

    return (
        <View style={[atomicStyles.flexRow, atomicStyles.marginVertical_20]}>
            <Button
                onPress={logic.toggleMode}
                outlined={store.servicesMode === ServiceTypes.symptoms}
                primary
                style={atomicStyles.flexOne}
            >
                Услуги
            </Button>

            <Button
                onPress={logic.toggleMode}
                outlined={store.servicesMode === ServiceTypes.works}
                primary
                style={atomicStyles.flexOne}
            >
                Симптомы
            </Button>
        </View>
    )
})