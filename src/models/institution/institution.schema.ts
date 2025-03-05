import mongoose, { Schema } from 'mongoose';
import { IInstitution } from './institution.interface';

const AddressSchema: Schema = new Schema({
  streetAddress: { type: String, required: true },
  locality: { type: String, required: true },
  region: { type: String, required: true },
  postalCode: { type: String, required: true },
  countryName: { type: String, required: true }
});

const InstitutionSchema: Schema = new Schema<IInstitution>({
  name: { type: String, required: true },
  address: { type: AddressSchema, required: true }
});

export const InstitutionModel = mongoose.model<IInstitution>('Institution', InstitutionSchema);
