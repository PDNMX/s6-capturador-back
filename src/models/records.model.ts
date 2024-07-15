import mongoose, { Document, PaginateModel, Schema } from 'mongoose';
import mongooseService from '../common/services/mongoose.service';
import { CustomError } from '../exceptions/customError';
import paginate from 'mongoose-paginate-v2';
import { IQuery } from '../schemas/yup.query';

let mongoo = mongooseService.getMongoose();

interface IRecord extends Document {
  id: String;
}

const recordSchema: Schema = new mongoo.Schema({
  id: String
});

recordSchema.set('toJSON', {
  virtuals: true
});

recordSchema.plugin(paginate);

interface RecordModelPagination<T extends Document> extends PaginateModel<T> {}
interface RecordModel<T extends Document> {}

class Record {
  private static modelPaginate: RecordModelPagination<IRecord> = mongoose.model<IRecord, mongoose.PaginateModel<IRecord>>('record', recordSchema);
  private static recordModel = mongoose.model<IRecord>('record', recordSchema);

  static queryPaginate = async (query: IQuery) => {
    console.log('query: ', query);

    const q = query.query || undefined;
    const s = query.sort || undefined;
    let nQuery = {};
    let nSort = {};
    let page = query.page || 1;
    let nPageSize = query.pageSize || 10;
    let pageSize = nPageSize < 1 ? 10 : nPageSize > 200 ? 200 : nPageSize;

    try {
      let rQuery = await this.modelPaginate.paginate(nQuery, { page, limit: pageSize, sort: nSort, collation: { locale: 'es' } }).then();
      return {
        pagination: { page: rQuery.page, pageSize: rQuery.limit, totalRows: rQuery.totalDocs, hasNextPage: rQuery.hasNextPage },
        results: rQuery.docs
      };
    } catch (error: object | any) {
      console.log('error: ', error);
      throw new CustomError('e_9002', 'Proceso de consulta fallido', error.message);
    }
  };

  static query = async (query: any) => {
    console.log('query: ', query);
    try {
      let rQuery = await this.recordModel.find(query).exec();
      console.log('rQuery: ', rQuery);
      return { results: rQuery };
    } catch (error: any) {
      console.log('error: ', error);
      throw new CustomError('e_9003', 'Proceso de consulta fallido', error.message);
    }
  };
}

export default Record;
