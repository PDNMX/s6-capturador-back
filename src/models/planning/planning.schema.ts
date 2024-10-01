import { Schema, Types } from "mongoose";
import mongooseService from "../../common/services/mongoose.service";


import { IPlanning } from "./planning.interface";
import { date } from "yup";

const mongoo = mongooseService.getMongoose();

//const Mixed = Schema.Types.Mixed;

const MilestoneSchema: Schema = new mongoo.Schema(
    {
        id: {
            type: String,
            default: new Types.ObjectId().toString()
        },
        title: String,
        type: String,
        description: String,
        code: String,
        dueDate: String,
        dateMet: String,
        dateModified: String,
        status: String
    },
    { _id: false }
);

const DocumentsSchema: Schema = new mongoo.Schema(
    {
        id: {
            type: String,
            default: new Types.ObjectId().toString()
        },
        documentType: String,
        title: String,
        description: String,
        url: String,
        datePublished: String,
        dateModified: String,
        format: String,
        languaje: String
    },
    { _id: false }
);

  const BudgetSchema: Schema = new mongoo.Schema(    
    {
        id: {
            type: String,
            default: new Types.ObjectId().toString()
        },
        description: String,
        value: {
            amount: String,
            currency: String
        },
        project: String,
        projectID: String,
        uri: String,
        budgetBreakdown: [
            {
                id: {
                    type: String,
                    default: new Types.ObjectId().toString()
                },
                description: String,
                amount: {
                    amount: String,                    
                    currency: String
                },
                uri: String,
                period: {                    
                    startDate: String,
                    endDate: String,
                    durationInDays: String,
                    maxExtentDate: String
                },
                budgetLines: [
                    {
                        id: {
                            type: String,
                            default: new Types.ObjectId().toString()
                        },
                        origin: String,
                        components: [
                            {
                                name: String,
                                level: String,
                                code: String,
                                description: String
                            }
                        ]
                    }
                ],
                sourceParty: {
                    name: String,
                    id: String
                }
            }
        ]
    },
    { _id: false }
);

const RequestingUnitsSchema: Schema = new mongoo.Schema(
    {
        id: {
            type: String,
            default: new Types.ObjectId().toString()
        },
        name: String
    },
    { _id: false }
);

const ResponsibleUnitsSchema: Schema = new mongoo.Schema(
    {
        id: {
            type: String,
            default: new Types.ObjectId().toString()
        },
        name: String
    },
    { _id: false }
);

const ContractingUnitsSchema: Schema = new mongoo.Schema(
    {
        id: {
            type: String,
            default: new Types.ObjectId().toString()
        },
        name: String
    },
    { _id: false }
);

const RequestForQuotesSchema: Schema = new mongoo.Schema(
    {
        id: {
            type: String,
            default: new Types.ObjectId().toString()
        },
        title: String,
        description: String,
        period: {
            startDate: String,
            endDate: String,
            durationInDays: String,
            maxExtentDate: String
        },
        items: [
            {
                id: {
                    type: String,
                    default: new Types.ObjectId().toString()
                },
                description: String,
                classification: {
                    scheme: String,
                    id: String,
                    description: String,
                    uri: String
                },
                additionalClassifications: [
                    {
                        scheme: String,
                        id: String,
                        description: String,
                        uri: String
                    }
                ],
                quantity: String,
                unit: {
                    scheme: String,
                    id: String,
                    name: String,
                    value: {
                        amount: String,
                        currency: String
                    },
                    uri: String
                }
            }
        ],
        inviteSuppliers: [
            {
                name: String,
                id: String
            }
        ],
        quotes: [
            {
                id: {
                    type: String,
                    default: new Types.ObjectId().toString()
                },
                descripition: String,
                date: String,
                items: [
                    {
                        id: {
                            type: String,
                            default: new Types.ObjectId().toString()
                        },
                        description: String,
                        classification: {
                            scheme: String,
                            id: String,
                            description: String,
                            uri: String
                        },
                        additionalClassifications: [
                            {
                                scheme: String,
                                id: String,
                                description: String,
                                uri: String
                            }
                        ],
                        quantity: String,
                        unit: {
                            scheme: String,
                            id: String,
                            name: String,
                            value: {
                                amount: String,
                                currency: String
                            },
                            uri: String
                        }
                    }
                ],
                value: {
                    amount: String,
                    currency: String
                },
                period: {
                    startDate: String,
                    endDate: String,
                    durationInDays: String,
                    maxExtentDate: String
                },
                issuingSupplier: {
                    name: String,
                    id: String
                }
            }
        ]
    },
    { _id: false }
);

const BudgetBreakdownSchema: Schema = new mongoo.Schema(
    {
        id: {
            type: String,
            default: new Types.ObjectId().toString()
        },
        description: String,
        amount: {
            amount: String,
            currency: String
        },
        uri: String,
        period: {
            startDate: String,
            endDate: String,
            durationInDays: String,
            maxExtentDate: String
        },
        budgetLines: [
            {
                id: {
                    type: String,
                    default: new Types.ObjectId().toString()
                },
                origin: String,
                components: [
                    {
                        name: String,
                        level: String,
                        code: String,
                        description: String
                    }
                ]
            }
        ],
        sourceParty: {                    
            name: String,
            id: String
        }
    },
    { _id: false }
);              



export const PlanningSchema = new mongoo.Schema(
    {
        rationale: String,
        hasQuotes: Boolean,
        requestingUnits: [RequestingUnitsSchema],
        responsibleUnits: [ResponsibleUnitsSchema],
        contractingUnits: [ContractingUnitsSchema],
        requestForQuotes: [RequestForQuotesSchema],
        budget: BudgetSchema,
        documents: [DocumentsSchema],
        milestones: [MilestoneSchema]
    },
    { _id: false }
);  
