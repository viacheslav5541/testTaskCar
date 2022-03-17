import { useQuery } from '@apollo/client';
import { action } from 'mobx';
import { Store } from '../store/store';
import { ServiceTypes } from '../types/serviceTypes';
import { ApiWizardWorksAndSymptoms, ApiWizardWorksResponce } from '../types/wizardWorks';
import { wizardWorksAndSymptoms } from './queries';


export class Logic {
    private readonly store: Store;
    constructor(store: Store) {
        this.store = store;
    }

    @action
    toggleMode = () => {
        if (this.store.servicesMode === ServiceTypes.works) {
            this.store.servicesMode = ServiceTypes.symptoms
        } else this.store.servicesMode = ServiceTypes.works
    }

    @action
    addServiceStep = (service: ApiWizardWorksAndSymptoms) => this.store.selectedServices = this.store.selectedServices.concat(service)

    @action
    removeServiceStep = () => {
        this.store.selectedServices = this.store.selectedServices.splice(0, this.store.selectedServices.length - 1)
    }

    @action
    removeServices = (index: number) => {
        this.store.appliedServices = this.store.appliedServices.filter((_, I) => index !== I)
    }

    @action
    applyServices = (withOther?: string) => {
        const preArray = this.store.selectedServices.map(item => item.name)
        !!withOther && preArray.push(withOther)
        this.store.appliedServices.push(preArray)
        this.store.selectedServices = []
    }

    getWorksAndSymptoms() {
        const data = useQuery<ApiWizardWorksResponce>(wizardWorksAndSymptoms)

        return data
    }
}


