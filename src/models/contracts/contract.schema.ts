import mongoose, { Schema } from "mongoose";
//import mongoosePaginate from "mongoose-paginate-v2";
import mongooseService from "../../common/services/mongoose.service";
//import { IContract } from "./contract.interface";

const mongoo = mongooseService.getMongoose();
export const ContractSchema: Schema = new mongoo.Schema(
  {
    _id: String,
    id: Schema.Types.Mixed,
    status: Schema.Types.Mixed,
    awardID: Schema.Types.Mixed,
    title: Schema.Types.Mixed,
    description: Schema.Types.Mixed,
    surveillanceMechanisms: Schema.Types.Mixed,
    period: {
      startDate: Schema.Types.Mixed,
      endDate: Schema.Types.Mixed,
      durationInDays: Schema.Types.Mixed,
      maxExtentDate: Schema.Types.Mixed,
    },
    value: {
      amount: Schema.Types.Mixed,
      amountNet: Schema.Types.Mixed,
      currency: Schema.Types.Mixed,
    },
    dateSignedContracts: {
      dateSigned: Schema.Types.Mixed,
    },
    items: [
      {
        id: Schema.Types.Mixed,
        description: Schema.Types.Mixed,
        clasification: {
          scheme: Schema.Types.Mixed,
          id: Schema.Types.Mixed,
          uri: Schema.Types.Mixed,
          description: Schema.Types.Mixed,
        },
        additionalClassifications: {
          scheme: Schema.Types.Mixed,
          id: Schema.Types.Mixed,
          uri: Schema.Types.Mixed,
          description: Schema.Types.Mixed,
        },
        quantity: Schema.Types.Mixed,
        unit: {
          scheme: Schema.Types.Mixed,
          id: Schema.Types.Mixed,
          name: Schema.Types.Mixed,
          uri: Schema.Types.Mixed,
          value: {
            amount: Schema.Types.Mixed,
            currency: Schema.Types.Mixed,
          },
        },
        deliveryLocation: {
          uri: Schema.Types.Mixed,
          description: Schema.Types.Mixed,
          geometry: {
            type: Schema.Types.Mixed,
            coordinates: {
              latitude: Schema.Types.Mixed,
              longitude: Schema.Types.Mixed,
            },
            gazetteer: {
              scheme: Schema.Types.Mixed,
              identifiers: Schema.Types.Mixed,
            },
          },
        },
        deliveryAddress: {
          uri: Schema.Types.Mixed,
          description: Schema.Types.Mixed,
          streetAddress: Schema.Types.Mixed,
          locality: Schema.Types.Mixed,
          region: Schema.Types.Mixed,
          postalCode: Schema.Types.Mixed,
          countryName: Schema.Types.Mixed,
        },
      },
    ],
    guarantees: [
      {
        id: Schema.Types.Mixed,
        type: Schema.Types.Mixed,
        date: Schema.Types.Mixed,
        obligations: Schema.Types.Mixed,
        value: {
          amount: Schema.Types.Mixed,
          currency: Schema.Types.Mixed,
        },
        guarantor: {
          id: Schema.Types.Mixed,
          name: Schema.Types.Mixed,
        },
        period: {
          startDate: Schema.Types.Mixed,
          endDate: Schema.Types.Mixed,
          durationInDays: Schema.Types.Mixed,
          maxExtentDate: Schema.Types.Mixed,
        },
      },
    ],
    documents: {
      id: Schema.Types.Mixed,
      documentType: Schema.Types.Mixed,
      title: Schema.Types.Mixed,
      description: Schema.Types.Mixed,
      uri: Schema.Types.Mixed,
      datePublished: Schema.Types.Mixed,
      dateModified: Schema.Types.Mixed,
      format: Schema.Types.Mixed,
    },
    relatedProcesses: {
      id: Schema.Types.Mixed,
      relationship: Schema.Types.Mixed,
      title: Schema.Types.Mixed,
      scheme: Schema.Types.Mixed,
      identifier: Schema.Types.Mixed,
      uri: Schema.Types.Mixed,
    },
    milestones: {
      id: Schema.Types.Mixed,
      title: Schema.Types.Mixed,
      type: Schema.Types.Mixed,
      description: Schema.Types.Mixed,
      code: Schema.Types.Mixed,
      dueDate: Schema.Types.Mixed,
      dateMet: Schema.Types.Mixed,
      dateModified: Schema.Types.Mixed,
      status: Schema.Types.Mixed,
    },
    amendments: {
      id: Schema.Types.Mixed,
      date: Schema.Types.Mixed,
      rationale: Schema.Types.Mixed,
      description: Schema.Types.Mixed,
      amendsReleaseID: Schema.Types.Mixed,
      releaseID: Schema.Types.Mixed,
    },
  },
  { strict: false }
);
