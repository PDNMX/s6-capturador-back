import { Schema, Types } from 'mongoose';
import mongooseService from '../../common/services/mongoose.service';

const mongoo = mongooseService.getMongoose();

const MilestoneSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    title: String,
    type: { type: String },
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
    language: String
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

const ItemsSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    description: String,
    classification: {
      scheme: {
        type: String,
        default: null
      },
      id: String,
      description: String,
      uri: String
    },
    additionalClassifications: [
      {
        scheme: {
          type: String,
          default: null
        },
        id: String,
        description: String,
        uri: String
      }
    ],
    quantity: String,
    unit: {
      scheme: {
        type: String,
        default: null
      },
      id: String,
      name: String,
      value: {
        amount: String,
        netAmount: String,
        currency: String
      },
      uri: String
    }
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
    items: [ItemsSchema],
    invitedSuppliers: [
      {
        id: String,
        name: String
      }
    ],
    quotes: [
      {
        id: {
          type: String,
          default: new Types.ObjectId().toString()
        },
        description: String,
        date: String,
        items: [ItemsSchema],
        value: {
          amount: String,
          netAmount: String,
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

export const PlanningSchema = new mongoo.Schema(
  {
    rationale: String,
    hasQuotes: Boolean,
    requestingUnits: [
      {
        id: String,
        name: String
      }
    ],
    responsibleUnits: [
      {
        id: String,
        name: String
      }
    ],
    contractingUnits: [
      {
        id: String,
        name: String
      }
    ],
    requestForQuotes: [RequestForQuotesSchema],
    budget: BudgetSchema,
    documents: [DocumentsSchema],
    milestones: [MilestoneSchema]
  },
  { _id: false }
);
