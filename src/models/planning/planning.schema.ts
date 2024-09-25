import mongoose, { Schema } from "mongoose";
import mongoosePagination from "mongoose-paginate-v2";
import mongooseService from "../../common/services/mongoose.service";
import { IPlanning } from "./planning.interface";
import { date } from "yup";

const mongoo = mongooseService.getMongoose();
const Mixed = Schema.Types.Mixed;

export const PlanningSchema = new mongoo.Schema({
    rationale: { type: Mixed },
    hasQuotes: { type: Mixed },
    requestingUnits: [
        {
            id: { type: Mixed },
            name: { type: Mixed },
        }
    ],
    responsibleUnits: [
        {
            id: { type: Mixed },
            name: { type: Mixed },
        }
    ],
    contractingUnits: [
        {
            id: { type: Mixed },
            name: { type: Mixed },
        }
    ],
    requestForQuotes : [
        {
            id: {type: Mixed},
            title: {type: Mixed},
            description: {type: Mixed},
            period: {
                startDate: { type: String },
                endDate: { type: String },
                durationInDays: { type: String },
                maxExtentDate: { type: String },
            },
            items: [
                {
                    id: { type: Mixed },
                    description: { type: Mixed },
                    classification: {
                        scheme: { type: Mixed },
                        id: { type: Mixed },
                        description: { type: Mixed },
                        uri: { type: Mixed },
                    },
                    additionalClassifications: [
                        {
                            scheme: { type: Mixed },
                            id: { type: Mixed },
                            description: { type: Mixed },
                            uri: { type: Mixed },
                        },
                    ],
                    quantity: { type: Mixed },
                    unit: {
                        scheme: { type: Mixed },
                        id: { type: Mixed },
                        name: { type: Mixed },
                        value: {
                            amount: { type: Mixed },
                            currency: { type: Mixed },
                        },
                        uri: { type: Mixed },
                    },
                },
            ],
            inviteSuppliers: [
                {
                    name: { type: Mixed },
                    id: { type: Mixed },
                }
            ],
            quotes: [
                {
                    id: { type: Mixed },
                    descripition: { type: Mixed },
                    date: { type: Mixed },
                    items: [
                        {
                            id: { type: Mixed },
                            description: { type: Mixed },
                            classification: {
                                scheme: { type: Mixed },
                                id: { type: Mixed },
                                description: { type: Mixed },
                                uri: { type: Mixed },
                            },
                            additionalClassifications: [
                                {
                                    scheme: { type: Mixed },
                                    id: { type: Mixed },
                                    description: { type: Mixed },
                                    uri: { type: Mixed },
                                },
                            ],
                            quantity: { type: Mixed },
                            unit: {
                                scheme: { type: Mixed },
                                id: { type: Mixed },
                                name: { type: Mixed },
                                value: {
                                    amount: { type: Mixed },
                                    currency: { type: Mixed },
                                },
                                uri: { type: Mixed },
                            },
                        },
                    ],
                    value: {
                        amount: { type: Mixed },
                        currency: { type: Mixed },
                    },
                    period: {
                        startDate: { type: String },
                        endDate: { type: String },
                        durationInDays: { type: String },
                        maxExtentDate: { type: String },
                    },
                    issuingSupplier: {
                        name: { type: Mixed },
                        id: { type: Mixed },
                    },
                }
            ],            
        }
    ],
    budget: {
        id: { type: Mixed },
        description: { type: Mixed },
        value: {
            amount: { type: Mixed },
            currency: { type: Mixed },
        },
        project: { type: Mixed },
        projectID: { type: Mixed },
        uri: { type: Mixed },
        budgetBreakdown: [
            {
                id: { type: Mixed },
                description: { type: Mixed },
                amount: {
                    amount: { type: Mixed },
                    currency: { type: Mixed },
                },
                uri: { type: Mixed },
                period: {
                    startDate: { type: String },
                    endDate: { type: String },
                    durationInDays: { type: String },
                    maxExtentDate: { type: String },
                },
                budgetLines: [
                    {
                        id: { type: Mixed },
                        origin: { type: Mixed },
                        components: [
                            {
                                name: { type: Mixed },
                                level: { type: Mixed },
                                code: { type: Mixed },
                                description: { type: Mixed },
                            },
                        ],
                    }
                ],
                sourceParty: {
                    name: { type: Mixed },
                    id: { type: Mixed },
                },
            }
        ],
    },
    documents: [
        {
            id: { type: Mixed },
            documentType: { type: Mixed },
            title: { type: Mixed },
            description: { type: Mixed },
            url: { type: Mixed },
            datePublished: { type: Mixed },
            dateModified: { type: Mixed },
            format: { type: Mixed },
            language: { type: Mixed },
        },
    ],
    milestones: [
        {
            id: { type: Mixed },
            title: { type: Mixed },
            type: { type: Mixed },
            description: { type: Mixed },
            code: { type: Mixed },
            dueDate: { type: Mixed },
            dateMet: { type: Mixed },
            dateModified: { type: Mixed },
            status: { type: Mixed },
        },
    ],
})
