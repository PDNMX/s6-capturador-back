import { object, number, string, InferType, array, date, boolean } from "yup";

export const planningQuerySchema = object({
    id: string(),
    rationale: string(),
    hasQuotes: boolean(),
    requestingUnits: array(
        object({
            name: string(),
            id: string(),
        })
    ),
    responsibleUnits: array(
        object({
            name: string(),
            id: string(),
        })
    ),
    contractingUnits: array(
        object({
            name: string(),
            id: string(),
        })
    ),
    requestForQuotes: array(
        object({
            id: number(),
            title: string(),
            description: string(),
            period: object({
                startDate: date(),
                endDate: date(),
                durationInDays: string(),
                maxExtentDate: date(),
            }),
            items: array(
                object({
                    id: number(),
                    description: string(),
                    classification: object({
                        scheme: string(),
                        id: string(),
                        description: string(),
                        uri: string(),
                    }),
                    additionalClassifications: array(
                        object({
                            scheme: string(),
                            id: string(),
                            description: string(),
                            uri: string(),
                        })
                    ),
                    quantity: string(),
                    unit: object({
                        scheme: string(),
                        id: string(),
                        name: string(),
                        value: object({
                            amount: string(),
                            currency: string(),
                        }),
                        uri: string(),
                    }),
                })
            ),
            inviteSuppliers: array(
                object({
                    name: string(),
                    id: string(),
                })
            ),
            quotes: array(
                object({
                    id: number(),
                    descripition: string(),
                    date: date(),
                    items: array(
                        object({
                            id: number(),
                            description: string(),
                            classification: object({
                                scheme: string(),
                                id: string(),
                                description: string(),
                                uri: string(),
                            }),
                            additionalClassifications: array(
                                object({
                                    scheme: string(),
                                    id: string(),
                                    description: string(),
                                    uri: string(),
                                })
                            ),
                            quantity: string(),
                            unit: object({
                                scheme: string(),
                                id: string(),
                                name: string(),
                                value: object({
                                    amount: string(),
                                    currency: string(),
                                }),
                                uri: string(),
                            }),
                        })
                    ),
                    value: object({
                        amount: string(),
                        currency: string(),
                    }),
                    period: object({
                        startDate: date(),
                        endDate: date(),
                        durationInDays: string(),
                        maxExtentDate: date(),
                    }),
                    issuingSupplier: object({
                        name: string(),
                        id: string(),
                    }),
                })
            ),
        })
    ),
    budget: object({
        id: string(),
        description: string(),
        value: object({
            amount: string(),
            currency: string(),
        }),
        project: string(),
        projectID: string(),
        uri: string(),
        budgetBreakdown: array(
            object({
                id: string(),
                description: string(),
                amount: object({
                    amount: string(),
                    currency: string(),
                }),
                uri: string(),
                period: object({
                    startDate: date(),
                    endDate: date(),
                    durationInDays: string(),
                    maxExtentDate: date(),
                }),
                budgetLines: array(
                    object({
                        id: string(),
                        origin: string(),
                        components: array(
                            object({
                                name: string(),
                                level: string(),
                                code: string(),
                                description: string(),
                            })
                        ),
                    })
                ),
                sourceParty: object({
                    name: string(),
                    id: string(),
                }),
            })
        ),
    }),
    documents: array(
        object({
            id: string(),
            documentType: string(),
            title: string(),
            description: string(),
            url: string(),
            datePublished: date(),
            dateModified: date(),
            format: string(),
            language: string(),
        })
    ),
    milestones: array(
        object({
            id: string(),
            title: string(),
            type: string(),
            description: string(),
            code: string(),
            dueDate: date(),
            dateMet: date(),
            dateModified: date(),
            status: string(),
        })
    ),
});
