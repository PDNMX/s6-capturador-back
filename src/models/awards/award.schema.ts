import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import mongooseService from "../../common/services/mongoose.service";
import { IAward } from "./award.interface";

const mongoo = mongooseService.getMongoose();

export const AwardSchema: Schema = new mongoo.Schema({
  id: { type: Number },
  status: { type: String },
  title: { type: String },
  description: { type: String },
  rationale: { type: String },
  date: { type: Date },
  value: {
    amount: { type: Number },
    currency: { type: String },
  },
  contractPeriod: {
    startDate: { type: Date },
    endDate: { type: Date },
    maxExtentDate: { type: Date },
    durationInDays: { type: Number },
  },
  suppliers: [{ id: { type: String }, name: { type: String } }],
  items: [
    {
      id: { type: String },
      description: { type: String },
      classification: {
        id: { type: String },
        description: { type: String },
        scheme: { type: String },
        uri: { type: String },
      },
      additionalClassifications: [
        {
          scheme: { type: String },
          id: { type: String },
          description: { type: String },
          uri: { type: String },
        },
      ],
      quantity: { type: Number },
      unit: {
        scheme: { type: String },
        id: { type: String },
        name: { type: String },
        value: {
          amount: { type: Number },
          currency: { type: String },
        },
        uri: { type: String },
      },
    },
  ],
  documents: [
    {
      id: { type: String },
      documentType: { type: String },
      title: { type: String },
      description: { type: String },
      url: { type: String },
      datePublished: { type: Date },
      dateModified: { type: Date },
      format: { type: String },
      language: { type: String },
    },
  ],
  amendments: [
    {
      date: { type: Date },
      rationale: { type: String },
      id: { type: String },
      description: { type: String },
      amendsReleaseID: { type: String },
      releaseID: { type: String },
    },
  ],
});

/* ContractSchema.plugin(mongoosePaginate);

export const ContractModel = mongoo.model<IContract & mongoose.Document>('Contract', ContractSchema);
export const ContractModelPaginate = ContractModel as mongoose.PaginateModel<IContract & mongoose.Document>; */