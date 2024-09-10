import { Document, PaginateModel } from 'mongoose';
import { IContract } from './contracts/contract.interface';
import { IAward } from './awards/award.interface';

export interface IRecord extends Document {
  id: String;
  contract: IContract;
  award:IAward;
}

export interface IDataUpdate {
  id: string;
  data: any;
}

export interface IRecordModelPagination<T extends Document> extends PaginateModel<T> {}
