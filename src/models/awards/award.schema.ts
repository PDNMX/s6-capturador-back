import { Schema, Types } from "mongoose";
import mongooseService from "../../common/services/mongoose.service";

const mongoo = mongooseService.getMongoose();

const AmendmentsSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString(),
    },
    date: String,
    rationale: String,
    description: String,
    amendsReleaseID: String,
    releaseID: String,
  },
  { _id: false }
);

const DocumentsSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString(),
    },
    documentType: String,
    title: String,
    description: String,
    url: String,
    datePublished: String,
    dateModified: String,
    format: String,
    language: String,
  },
  { _id: false }
);

const ItemsSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString(),
    },
    description: String,
    classification: {
      id: String,
      description: String,
      scheme: String,
      uri: String,
    },
    additionalClassifications: [
      {
        scheme: String,
        id: String,
        description: String,
        uri: String,
      },
    ],
    quantity: Number,
    unit: {
      name: String,
      value: {
        amount: Number,
        currency: String,
      },
    },
  },
  { _id: false }
);

const SuppliersSchema: Schema = new mongoo.Schema(
  {
    id: String,
    name: String,
  },
  { _id: false }
);

export const AwardSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      //default: new Types.ObjectId().toString(),
    },
    status: String,
    title: String,
    description: String,
    rationale: String,
    date: String,
    value: {
      amount: Number,
      currency: String,
    },
    contractPeriod: {
      startDate: String,
      endDate: String,
      maxExtentDate: String,
      durationInDays: Number,
    },
    suppliers: [SuppliersSchema],
    items: [ItemsSchema],
    documents: [DocumentsSchema],
    amendments: [AmendmentsSchema],
  },
  { _id: false }
);
