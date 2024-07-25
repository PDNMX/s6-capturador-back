import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import mongooseService from "../../common/services/mongoose.service";
import { IAward } from "./award.interface";

const mongoo = mongooseService.getMongoose();

export const AwardSchema: Schema = new mongoo.Schema({
  id: { type: String },
  status: { type: String },
  awardID: { type: String },
  title: { type: String },
  description: { type: String },
  surveillanceMechanisms: { type: String },
  period: {
    startDate: { type: String },
    endDate: { type: String },
    durationInDays: { type: String },
    maxExtentDate: { type: String },
  },
  value: {
    amount: { type: String },
    amountNet: { type: String },
    currency: { type: String },
  },
  dateSignedContracts: {
    dateSigned: { type: String },
  },
});

/* ContractSchema.plugin(mongoosePaginate);

export const ContractModel = mongoo.model<IContract & mongoose.Document>('Contract', ContractSchema);
export const ContractModelPaginate = ContractModel as mongoose.PaginateModel<IContract & mongoose.Document>; */
