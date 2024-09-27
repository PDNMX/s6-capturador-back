import mongoosePaginate from 'mongoose-paginate-v2';
import { IRecord, IRecordModelPagination } from './record.interface';
import mongoose, { Schema, Types } from 'mongoose';
import mongooseService from '../common/services/mongoose.service';
import { ContractSchema } from './contracts/contract.schema';
import { MetadataSchema } from './metadata/metadata.schema';
import { AwardSchema } from './awards/award.schema';
import { TenderSchema } from './tenders/tender.schema';
import config from '../config';

let mongoo = mongooseService.getMongoose();
let ocid = config.ocid;
console.log('ocid: ', ocid);

const RecordSchema: Schema<IRecord> = new mongoo.Schema({
  id: String,
  ocid: {
    type: String,
    default: `${ocid}-${new Types.ObjectId().toString()}`
  },
  metadata: MetadataSchema,
  contract: ContractSchema,
  award: AwardSchema,
  tender: TenderSchema
});

RecordSchema.set('toJSON', {
  virtuals: true
});

RecordSchema.plugin(mongoosePaginate);

export const RecordModelPaginate: IRecordModelPagination<IRecord> = mongoose.model<IRecord, mongoose.PaginateModel<IRecord>>('Record', RecordSchema);
export const RecordModel = mongoose.model<IRecord>('Record', RecordSchema);
