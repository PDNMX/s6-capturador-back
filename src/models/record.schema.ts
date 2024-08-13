import mongoosePaginate from 'mongoose-paginate-v2';
import { IRecord, IRecordModelPagination } from './record.interface';
import mongoose, { Schema } from 'mongoose';
import mongooseService from '../common/services/mongoose.service';
import { ContractSchema } from './contracts/contract.schema';

let mongoo = mongooseService.getMongoose();

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
    contracts: [ContractSchema]
});

RecordSchema.set('toJSON', {
  virtuals: true
});

RecordSchema.plugin(mongoosePaginate);

export const RecordModelPaginate: IRecordModelPagination<IRecord> = mongoose.model<IRecord, mongoose.PaginateModel<IRecord>>('Record', RecordSchema);
export const RecordModel = mongoose.model<IRecord>('Record', RecordSchema);
