import React, { useState } from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import CartDeleteIcon from '../icons/CartDeleteIcon.svg'
import { useLogic, useStore } from "../../logic/storeHook";
import { atomicStyles } from "../../styles/atomicStyles";
import { Text } from "../ui/Text";
import { observer } from "mobx-react-lite";
import { Button } from "../ui/Button";
import { useNavigation } from "../../logic/navigationHook";


export const CartScreen = observer(() => {

    const store = useStore()

    const logic = useLogic()

    const navigation = useNavigation()

    return (
        <View style={[atomicStyles.screenPaddingX, atomicStyles.screenPaddingY]}>
            <Text largest_22>Выбранные услуги</Text>
            <FlatList
                renderItem={
                    (item) => (
                        <View style={[atomicStyles.flexRow, atomicStyles.marginVertical_5, atomicStyles.alignItemsCenter]}>
                            <Text largest_22 style={atomicStyles.marginRight_5}>{item.index}</Text>
                            <Text style={{ width: Dimensions.get('screen').width - 100 }}>{item.item.map((service, index) => service + (index !== item.item.length - 1 ? '>' : ''))}</Text>

                            <View style={styles.icon}>
                                <TouchableOpacity onPress={() => logic.removeServices(item.index)}>
                                    <CartDeleteIcon />
                                </TouchableOpacity>
                            </View>

                        </View>
                    )
                }
                data={store.appliedServices}
            />
            <Button onPress={() => navigation.goBack()} style={atomicStyles.marginVertical_15} primary>К выбору услуг</Button>
        </View>

    )
})


const styles = StyleSheet.create({
    icon: { position: 'absolute', right: 0 }
})