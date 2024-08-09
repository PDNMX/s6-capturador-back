import mongoose, { Schema } from "mongoose";
//import mongoosePaginate from "mongoose-paginate-v2";
import mongooseService from "../../common/services/mongoose.service";
//import { IContract } from "./contract.interface";

const mongoo = mongooseService.getMongoose();

export const ContractGeneralSchema: Schema = new mongoo.Schema({
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
    amount: { type: Number },
    amountNet: { type: String },
    currency: { type: String },
  },
  dateSignedContracts: {
    dateSigned: { type: String },
  }

});

export const ContractSchema: Schema = new mongoo.Schema({
    contract: { 
      /* Cambiar por esquemas correspondientes a las secciones */
      type: Schema.Types.Mixed,
      //type: ContractGeneralSchema,
     },
},{strict:false}
);


/* ContractSchema.plugin(mongoosePaginate);

export const ContractModel = mongoo.model<IContract & mongoose.Document>('Contract', ContractSchema);
export const ContractModelPaginate = ContractModel as mongoose.PaginateModel<IContract & mongoose.Document>; */
