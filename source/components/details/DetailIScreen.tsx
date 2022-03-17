import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "../../logic/navigationHook";


import { useLogic, useStore } from "../../logic/storeHook";
import { atomicStyles } from "../../styles/atomicStyles";
import { ApiWizardWorksAndSymptoms } from "../../types/wizardWorks";
import { Button } from "../ui/Button";
import { Text } from "../ui/Text";


export const DetailScreen = ({ navigation: { state: { params: { service, onAccept } } } }: { navigation: { state: { params: { service: ApiWizardWorksAndSymptoms, onAccept: () => void } } } }) => {

    const [details, setDetails] = useState('')

    const store = useStore()

    const logic = useLogic()

    const navigation = useNavigation()

    const onAdd = () => {

        logic.addServiceStep(service)

        logic.applyServices(details)

        onAccept()

        navigation.navigate('FinalScreen')

    }
    return (
        <View style={[atomicStyles.screenPaddingX, atomicStyles.screenPaddingY]}>
            <Text bold_700 larger_20>
                Опишите своими словами
            </Text>
            <TextInput
                onChangeText={(value) => setDetails(value)}
                value={details}
                textAlignVertical={'top'}
                textAlign={'left'}
                style={styles.textInput}
            />
            <Button onPress={onAdd} disabled={!!!details} primary >Добавить</Button>
        </View>

    )
}


const styles = StyleSheet.create({

    textInput: {
        width: '100%',
        height: 100,
        marginVertical: 20,
        textAlign: 'left',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 20
    },

})