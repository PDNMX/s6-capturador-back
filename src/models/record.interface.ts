import { Document, PaginateModel } from 'mongoose';

export interface IRecord extends Document {
  id: String;
  nombre: String;
}

export interface IDataUpdate {
  id: string;
  data: any;
}

export interface IRecordModelPagination<T extends Document> extends PaginateModel<T> {}
