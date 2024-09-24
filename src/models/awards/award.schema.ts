import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import mongooseService from "../../common/services/mongoose.service";
import { IAward } from "./award.interface";

const mongoo = mongooseService.getMongoose();
const Mixed = Schema.Types.Mixed;

export const AwardSchema: Schema = new mongoo.Schema({
  id: { type: Mixed },
  status: { type: Mixed },
  title: { type: Mixed },
  description: { type: Mixed },
  rationale: { type: Mixed },
  date: { type: Mixed },
  value: {
    amount: { type: Mixed },
    currency: { type: Mixed },
  },
  contractPeriod: {
    startDate: { type: Mixed },
    endDate: { type: Mixed },
    maxExtentDate: { type: Mixed },
    durationInDays: { type: Mixed },
  },
  suppliers: [{ id: { type: Mixed }, name: { type: Mixed } }],
  items: [
    {
      id: { type: Mixed },
      description: { type: Mixed },
      classification: {
        id: { type: Mixed },
        description: { type: Mixed },
        scheme: { type: Mixed },
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
  amendments: [
    {
      date: { type: Mixed },
      rationale: { type: Mixed },
      id: { type: Mixed },
      description: { type: Mixed },
      amendsReleaseID: { type: Mixed },
      releaseID: { type: Mixed },
    },
  ],
});

/* ContractSchema.plugin(mongoosePaginate);

export const ContractModel = mongoo.model<IContract & mongoose.Document>('Contract', ContractSchema);
export const ContractModelPaginate = ContractModel as mongoose.PaginateModel<IContract & mongoose.Document>; */
