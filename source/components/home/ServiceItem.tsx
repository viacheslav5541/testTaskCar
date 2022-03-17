
import React from 'react'
import { Image, ListRenderItemInfo, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from 'react-navigation'
import { useThemeStyles } from '../../logic/themeHooks'
import { atomicStyles } from '../../styles/atomicStyles'
import { ApiWizardWorksAndSymptoms } from '../../types/wizardWorks'
import { Text } from '../ui/Text'

export type ServiceItemProps = {
    item: ApiWizardWorksAndSymptoms

    onPress: (service: ApiWizardWorksAndSymptoms) => void
}


export const ServiceItem = ({ item, onPress }: ServiceItemProps) => {
    const theme = useTheme()

    const themeStyles = useThemeStyles()
    return (
        <TouchableOpacity
            onPress={onPress.bind(this, item)}
            style={[atomicStyles.flexRow, atomicStyles.marginVertical_5, atomicStyles.alignItemsCenter, themeStyles.surface, { height: 50, paddingHorizontal: 20, borderRadius: 6 }]}
        >

            {
                item.image &&
                <Image
                    source={{ uri: item.image.file.url }}
                    style={{ width: 24, height: 24 }}
                />
            }
            <Text style={atomicStyles.screenPaddingX}>
                {item.name}
            </Text>
        </TouchableOpacity>
    )
}
