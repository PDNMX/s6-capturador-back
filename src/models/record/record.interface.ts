import { Document, PaginateModel } from 'mongoose';
import { IMetadata } from '../metadata/metadata.interface';
import { IContract } from '../contracts/contract.interface';
import { IAward } from '../awards/award.interface';
import { ITender } from '../tenders/tender.interface';
import { IPlanning } from '../planning/planning.interface';
import { IParties } from '../parties/parties.interface';
import { IInstitution } from '../institution/institution.interface';

export interface IRecord extends Document {
  institution: IInstitution;
  ocid: string;
  id: string;
  metadata: IMetadata;
  contracts: [IContract];
  awards: [IAward];
  tender: ITender;
  planning: IPlanning;
  parties: [IParties];
}

export interface IDataUpdate {
  id: string;
  data: any;
}

export interface IDataToken {
  username: string;
}

export interface IRecordModelPagination<T extends Document> extends PaginateModel<T> {}
