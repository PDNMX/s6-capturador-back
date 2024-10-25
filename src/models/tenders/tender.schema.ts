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
    language: String
  },
  { _id: false }
);

const ClarificationMeetingsSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    date: String,
    attendees: [
      {
        id: String,
        name: String
      }
    ],
    officials: [
      {
        id: String,
        name: String
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
      id: String,
      schema: String,
      description: String,
      // unit: String,
      uri: String
    },
    additionalClassifications: [
      {
        id: String,
        schema: String,
        description: String,
        // unit: String,
        uri: String
      }
    ],
    quantity: Number,
    unit: {
      name: String,
      value: {
        amount: Number,
        amountNet: Number,
        currency: String
      }
    }
  },
  { _id: false }
);

export const TenderSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },
    title: String,
    description: String,
    status: String,
    procuringEntity: {
      id: String,
      name: String
    },
    value: {
      amount: Number,
      currency: String
    },
    minValue: {
      amount: Number,
      currency: String
    },
    procurementMethod: String,
    procurementMethodDetails: String,
    procurementMethodRationale: String,
    mainProcurementCategory: String,
    additionalProcurementCategories: [String],
    awardCriteria: String,
    awardCriteriaDetails: String,
    submissionMethod: [String],
    submissionMethodDetails: String,
    tenderPeriod: {
      startDate: String,
      endDate: String,
      maxExtentDate: String,
      durationInDays: Number
    },
    enquiryPeriod: {
      startDate: String,
      endDate: String,
      maxExtentDate: String,
      durationInDays: Number
    },
    hasEnquiries: Boolean,
    awardPeriod: {
      startDate: String,
      endDate: String,
      maxExtentDate: String,
      durationInDays: Number
    },
    contractPeriod: {
      startDate: String,
      endDate: String,
      maxExtentDate: String,
      durationInDays: Number
    },
    eligibilityCriteria: String,
    numberOfTenderers: Number,
    items: [ItemsSchema],
    clarificationMeetings: [ClarificationMeetingsSchema],
    tenderers: [{ id: String, name: String }],
    documents: [DocumentsSchema],
    milestones: [MilestoneSchema],
    amendments: [AmendmentsSchema]
  },
  { _id: false }
);
