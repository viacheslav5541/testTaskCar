import { computed, observable } from 'mobx'
import { ServiceTypes } from '../types/serviceTypes'
import { ApiWizardWorksAndSymptoms } from '../types/wizardWorks'
import { createTheme } from './theme'
import { createThemeStyles } from './themeStyles'

export type AppliedService = string[]

export class Store {


    @observable
    theme = createTheme()

    @computed
    get themeStyles() {
        return createThemeStyles(this.theme)
    }

    @observable
    selectedServices: ApiWizardWorksAndSymptoms[] = []

    @observable
    appliedServices: AppliedService[] = []


    @observable
    servicesMode = ServiceTypes.works
}