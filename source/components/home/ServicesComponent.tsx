
import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { NavigationContext } from 'react-navigation'
import { useNavigation } from '../../logic/navigationHook'
import { useLogic, useStore } from '../../logic/storeHook'
import { atomicStyles } from '../../styles/atomicStyles'
import { ApiWizardWorksAndSymptoms } from '../../types/wizardWorks'
import { BackButton } from '../ui/BackButton'
import { Text } from '../ui/Text'
import { ServiceItem } from './ServiceItem'

export type ServicesComponentProps = {
    serviceItems: ApiWizardWorksAndSymptoms[] | undefined
}


export const ServicesComponent = observer(
    ({ serviceItems }: ServicesComponentProps) => {

        const logic = useLogic()

        const { selectedServices, appliedServices } = useStore()

        const navigation = useNavigation()

        const [services, setServices] = useState(serviceItems)
        console.log(appliedServices)
        if (!services) return null

        const onServicePress = (service: ApiWizardWorksAndSymptoms) => {
            if (service.other) {
                return navigation.navigate('DetailScreen', { service, onAccept: () => setServices(serviceItems) })
            }

            if (service.children?.length === 0) {
                setServices(serviceItems)
                logic.addServiceStep(service)
                logic.applyServices()
                return navigation.navigate('FinalScreen')
            }

            logic.addServiceStep(service)
            setServices(service.children)

        }

        const onBackPress = () => {

            if (selectedServices.length <= 1) {
                setServices(serviceItems)
            } else {
                setServices(selectedServices[selectedServices.length - 2].children)
            }
            logic.removeServiceStep()
        }

        return (
            <>
                {
                    selectedServices.length > 0 &&
                    <View style={[atomicStyles.flexRow, atomicStyles.alignItemsCenter]}>

                        <BackButton onPress={onBackPress} style={atomicStyles.alignItemsStart} />

                        <Text style={{ width: Dimensions.get('screen').width - 100, marginLeft: 5 }} large_18>{selectedServices[selectedServices.length - 1].question}?</Text>
                    </View>
                }
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {
                        services.map(service => {
                            return <ServiceItem onPress={onServicePress.bind(this, service)} key={service.id} item={service} />
                        })
                    }
                </ScrollView>
            </>
        )

    })

