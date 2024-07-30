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
});

/* ContractSchema.plugin(mongoosePaginate);

export const ContractModel = mongoo.model<IContract & mongoose.Document>('Contract', ContractSchema);
export const ContractModelPaginate = ContractModel as mongoose.PaginateModel<IContract & mongoose.Document>; */
