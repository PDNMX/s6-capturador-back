import mongoosePaginate from 'mongoose-paginate-v2';
import { IRecord, IRecordModelPagination } from './record.interface';
import mongoose, { Schema } from 'mongoose';
import mongooseService from '../common/services/mongoose.service';
import { ContractSchema } from './contracts/contract.schema';

let mongoo = mongooseService.getMongoose();

const RecordSchema: Schema<IRecord> = new mongoo.Schema({
  id: String,
  contract: ContractSchema,
});

RecordSchema.set('toJSON', {
  virtuals: true
});

RecordSchema.plugin(mongoosePaginate);

export const RecordModelPaginate: IRecordModelPagination<IRecord> = mongoose.model<IRecord, mongoose.PaginateModel<IRecord>>('Record', RecordSchema);
export const RecordModel = mongoose.model<IRecord>('Record', RecordSchema);
