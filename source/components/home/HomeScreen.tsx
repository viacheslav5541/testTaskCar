import { observer } from "mobx-react-lite";
import React from "react";
import { NativeSyntheticEvent, StyleSheet, TextInputSubmitEditingEventData } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationParams, NavigationRoute, NavigationScreenProp } from "react-navigation";
import { useLogic, useStore } from "../../logic/storeHook";
import { atomicStyles } from "../../styles/atomicStyles";
import { ServiceTypes } from "../../types/serviceTypes";
import { BackButton } from "../ui/BackButton";
import { Loader } from "../ui/Loader";
import { LoadingError } from "../ui/LoadingError";
import { ServicesComponent } from "./ServicesComponent";
import { ServicesSwitcher } from "./ServicesSwitcher";
import CartIcon from '../icons/CartIcon.svg'
import { TouchableOpacity } from "react-native-gesture-handler";
export type HomeScreenProps = {
  navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
}

export const HomeScreen = observer(
  ({ navigation }: HomeScreenProps) => {

    const { servicesMode } = useStore()

    const logic = useLogic()

    const { loading, data, error, refetch } = logic.getWorksAndSymptoms()

    return (
      <SafeAreaView style={styles.container}>
        {
          loading
            ? <Loader />
            : error
              ? <LoadingError refetch={refetch} />
              : (
                <>
                  <TouchableOpacity onPress={() => navigation.navigate('FinalScreen')}>
                    <CartIcon style={atomicStyles.alignSelfEnd} />
                  </TouchableOpacity>
                  <ServicesSwitcher />
                  <ServicesComponent
                    key={servicesMode === ServiceTypes.symptoms ? '#' : '$'}
                    serviceItems={servicesMode === ServiceTypes.symptoms ? data?.wizardSymptoms : data?.wizardWorks}
                  />
                </>
              )
        }
      </SafeAreaView>
    )
  })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
})