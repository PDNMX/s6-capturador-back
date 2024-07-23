import { Document, PaginateModel } from 'mongoose';
import { IContract } from './contracts/contract.interface';

export interface IRecord extends Document {
  id: String;
  contract: IContract;
}

export interface IDataUpdate {
  id: string;
  data: any;
}

export interface IRecordModelPagination<T extends Document> extends PaginateModel<T> {}
