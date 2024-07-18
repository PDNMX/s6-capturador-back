import mongoosePaginate from 'mongoose-paginate-v2';
import { IRecord, IRecordModelPagination } from './record.interface';
import mongoose, { Schema } from 'mongoose';
import mongooseService from '../common/services/mongoose.service';

let mongoo = mongooseService.getMongoose();

const RecordSchema: Schema<IRecord> = new mongoo.Schema({
  id: String,
  nombre: String
});

RecordSchema.set('toJSON', {
  virtuals: true
});

RecordSchema.plugin(mongoosePaginate);

export const RecordModelPaginate: IRecordModelPagination<IRecord> = mongoose.model<IRecord, mongoose.PaginateModel<IRecord>>('Record', RecordSchema);
export const RecordModel = mongoose.model<IRecord>('Record', RecordSchema);
