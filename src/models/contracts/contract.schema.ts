import { Schema, Types } from 'mongoose';
import mongooseService from '../../common/services/mongoose.service';

const mongoo = mongooseService.getMongoose();

const AmendmentsSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    date: String,
    rationale: String,
    description: String,
    amendsReleaseID: String,
    releaseID: String
  },
  { _id: false }
);

const RelatedProcessesSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    relationship: [String],
    title: String,
    scheme: String,
    identifier: String,
    uri: String
  },
  { _id: false }
);

const MilestonesSchema: Schema = new mongoo.Schema(
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

const TransactionsSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    source: String,
    date: String,
    paymentMethod: String,
    value: {
      amount: Number,
      currency: String
    },
    payer: {
      id: String,
      name: String
    },
    payee: {
      id: String,
      name: String
    },
    uri: String
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
    uri: String,
    datePublished: String,
    dateModified: String,
    format: String,
    language: String
  },
  { _id: false }
);

const GuaranteesSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    type: String,
    date: String,
    obligations: String,
    value: {
      amount: Number,
      currency: String
    },
    guarantor: {
      id: String,
      name: String
    },
    period: {
      startDate: String,
      endDate: String,
      durationInDays: Number,
      maxExtentDate: String
    }
  },
  { _id: false }
);

const ItemsSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    description: String,
    clasification: {
      scheme: String,
      id: String,
      uri: String,
      description: String
    },
    additionalClassifications: {
      scheme: String,
      id: String,
      uri: String,
      description: String
    },
    quantity: Number,
    unit: {
      scheme: String,
      id: String,
      name: String,
      uri: String,
      value: {
        amount: Number,
        currency: String
      }
    }
  },
  { _id: false }
);

export const ContractSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    awardID: String,
    title: String,
    description: String,
    status: String,
    period: {
      startDate: String,
      endDate: String,
      durationInDays: Number,
      maxExtentDate: String
    },
    value: {
      amount: Number,
      amountNet: Number,
      currency: String,
      exchangeRates: [
        {
          rate: Number,
          currency: String,
          date: String,
          source: String
        }
      ]
    },
    items: [ItemsSchema],
    dateSigned: String,
    surveillanceMechanisms: [String],
    guarantees: [GuaranteesSchema],
    documents: [DocumentsSchema],
    implementation: {
      status: String,
      transactions: [TransactionsSchema],
      milestones: [MilestonesSchema],
      documents: [DocumentsSchema]
    },
    relatedProcesses: [RelatedProcessesSchema],
    milestones: [MilestonesSchema],
    amendments: [AmendmentsSchema]
  },
  { _id: false }
);
