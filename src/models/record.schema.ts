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

/* const ContractGeneralSchema: Schema = new mongoo.Schema({
  id: String,
  status: String,
  awardID: String,
  title: String,
  description: String,
  surveillanceMechanisms: String,
  period: {
    startDate: String,
    endDate: String,
    durationInDays: String,
    maxExtentDate: String
  },
  value: {
    amount: String,
    amountNet: String,
    currency: String
  },
  dateSignedContracts: {
    dateSigned: String
  },
  items: {
    id: String,
    description: String,
    clasification: {
      scheme: String,
      id: String,
      uri: String,
      description: String
    },
    additionalClassifications: {
      scheme: String,
      id: String,
      uri: String,
      description: String
    },
    quantity: String,
    unit: {
      scheme: String,
      id: String,
      name: String,
      uri: String,
      value: {
        amount: String,
        currency: String
      }
    },
    deliveryLocation: {
      uri: String,
      description: String,
      geometry: {
        type: String,
        coordinates: {
          type: String,
          coordinates: [String]
        }
      }
    }
  },
  documents: {
    id: String,
    documentType: String,
    title: String,
    description: String,
    url: String,
    datePublished: String
  },
  guarantees: {
    id: String,
    description: String,
    amount: String,
    currency: String,
    dateFrom: String,
    dateTo: String
  },
  relatedProcesses: {
    id: String,
    relationship: String,
    title: String
  },
  amendments: {
    id: String,
    date: String,
    rationale: String,
    amendsReleaseID: String,
    releaseID: String
  },
  milestones: {
    id: String,
    title: String,
    type: String,
    description: String,
    code: String,
    dueDate: String,
    dateMet: String,
    dateModified: String,
    status: String
  }

}); */


const RecordSchema: Schema<IRecord> = new mongoo.Schema({
  id: String,
  contracts: [ContractSchema],
  ocid: {
    type: String,
    default: () => `${ocid}-${new Types.ObjectId().toString()}`
  },
  metadata: MetadataSchema,
  //contract: ContractSchema,
  award: AwardSchema,
  tender: TenderSchema
});

RecordSchema.set('toJSON', {
  virtuals: true
});

RecordSchema.plugin(mongoosePaginate);

export const RecordModelPaginate: IRecordModelPagination<IRecord> = mongoose.model<IRecord, mongoose.PaginateModel<IRecord>>('Record', RecordSchema);
export const RecordModel = mongoose.model<IRecord>('Record', RecordSchema);
