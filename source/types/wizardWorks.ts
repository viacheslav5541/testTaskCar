
export type ApiWizardWorksResponce = {
    wizardWorks: ApiWizardWorksAndSymptoms[]

    wizardSymptoms: ApiWizardWorksAndSymptoms[]
}

export type ApiWizardWorksAndSymptoms = {
    id: number

    name: string

    question: string

    other: boolean

    image: ApiImage

    children: ApiWizardWorksAndSymptoms[]
}



export type ApiImage = {
    id: number,

    file: {
        url: string
        path: string
    }

}