import React, { ComponentProps, ComponentPropsWithoutRef, ComponentPropsWithRef, RefObject, useRef } from "react";
import { ActivityIndicator, StyleProp, StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SearchIcon from "../icons/SearchIcon.svg";
import XIcon from "../icons/XIcon.svg";

type SearchProps = ComponentPropsWithoutRef<typeof TextInput> & {

    viewStyle?: StyleProp<ViewStyle>
}

export const Search =
    ({ viewStyle, ...props }: SearchProps) => {

        const textRef = useRef<TextInput>(null)

        return (
            <View style={[styles.container, viewStyle]}>
                <SearchIcon />

                <TextInput
                    style={{ flex: 1 }}
                    ref={textRef}
                    placeholder={'Поиск'}
                    selectionColor={'#000000'}
                    {...props}
                />

                <TouchableOpacity onPress={() => textRef.current?.clear()} style={styles.xIcon}>
                    <XIcon />
                </TouchableOpacity>
            </View>


        )
    }


const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        borderWidth: 1,
        borderRadius: 50,
    },
    xIcon: {
        marginRight: 20
    }
})