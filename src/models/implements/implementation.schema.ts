import mongoose, { Schema } from "mongoose";
//import mongoosePaginate from "mongoose-paginate-v2";
import mongooseService from "../../common/services/mongoose.service";
//import { IContract } from "./contract.interface";

const mongoo = mongooseService.getMongoose();
export const implementationSchema : Schema = new mongoo.Schema({
    status: Schema.Types.Mixed,
    transacitions: Schema.Types.Mixed,
    milestones: Schema.Types.Mixed,
    documents: Schema.Types.Mixed,
  });

  implementationSchema.set('toJSON', {
    virtuals: true
  });
  //implementationSchema.plugin(mongoosePaginate);
