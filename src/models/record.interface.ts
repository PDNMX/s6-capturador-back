import { Document, PaginateModel } from 'mongoose';
import { IContract } from './contracts/contract.interface';
import { IMetadata } from './metadata/metadata.interface';
import { IAward } from './awards/award.interface';
import { ITender } from './tenders/tender.interface';

export interface IRecord extends Document {
  ocid: string;
  id: string;
  metadata: IMetadata;
  contracts: IContract[];
  award:IAward;
  tender: ITender;
}

export interface IDataUpdate {
  id: string;
  data: any;
}

export interface IRecordModelPagination<T extends Document> extends PaginateModel<T> {}
