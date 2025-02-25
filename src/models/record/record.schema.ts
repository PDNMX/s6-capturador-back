import mongoosePaginate from 'mongoose-paginate-v2';
import { IRecord, IRecordModelPagination } from './record.interface';
import mongoose, { Schema, Types } from 'mongoose';
import mongooseService from '../../common/services/mongoose.service';
import { ContractSchema } from '.././contracts/contract.schema';
import { MetadataSchema } from '.././metadata/metadata.schema';
import { AwardSchema } from '.././awards/award.schema';
import { TenderSchema } from '.././tenders/tender.schema';
import { PlanningSchema } from '.././planning/planning.schema';
import config from '../../config';
import { PartiesSchema } from '.././parties/parties.schema';

let mongoo = mongooseService.getMongoose();
let ocid = config.ocid;

const RecordSchema: Schema<IRecord> = new mongoo.Schema({
  id: String,
  ocid: {
    type: String,
    default: () => `${ocid}-${new Types.ObjectId().toString()}`
  },
  metadata: MetadataSchema,
  awards: [AwardSchema],
  tender: TenderSchema,
  parties: [PartiesSchema],
  planning: PlanningSchema,
  contracts: [ContractSchema]
});

RecordSchema.set('toJSON', {
  virtuals: true
});

RecordSchema.plugin(mongoosePaginate);

export const RecordModelPaginate: IRecordModelPagination<IRecord> = mongoose.model<IRecord, mongoose.PaginateModel<IRecord>>('Record', RecordSchema);
export const RecordModel = mongoose.model<IRecord>('Record', RecordSchema);
