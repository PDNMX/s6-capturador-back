import { Schema, Types } from 'mongoose';
import mongooseService from '../../common/services/mongoose.service';

const mongoo = mongooseService.getMongoose();

const BeneficialOwnersSchema: Schema = new mongoo.Schema({
  id: {
    type: String,
    default: new Types.ObjectId().toString()
  },
  name: String,

  identifier: {
    scheme: String,
    id: String
  },

  nationality: String,
  email: String,
  telephone: String,
  faxNumber: String,
  address: {
    streetAddress: String,
    locality: String,
    region: String,
    postalCode: String,
    countryName: String
  }
});

const AdditionalContactPointsSchema: Schema = new mongoo.Schema(
  {
    type: { type: String },
    name: String,
    givenName: String,
    patronymicName: String,
    matronymicName: String,
    email: String,
    telephone: String,
    faxNumber: String,
    url: String,
    availableLanguage: [String]
  },
  { _id: false }
);

export const PartiesSchema: Schema = new mongoo.Schema(
  {
    id: {
      type: String,
      default: new Types.ObjectId().toString()
    },

    name: String,
    position: String,
    roles: [String],

    memberOf: [
      {
        id: String,
        name: String
      }
    ],

    identifier: {
      legalPersonality: String,
      schema: String,
      id: String,
      uri: String,
      legalName: String,
      givenName: String,
      patronymicName: String,
      matronymicName: String
    },

    additionalIdentifiers: [
      {
        schema: String,
        id: String,
        uri: String,
        legalName: String
      }
    ],

    details: {
      listedOnRegulatedMarket: Boolean
    },

    address: {
      streetAddress: String,
      locality: String,
      region: String,
      postalCode: String,
      countryName: String
    },

    contactPoint: {
      type: { type: String },
      name: String,
      givenName: String,
      patronymicName: String,
      matronymicName: String,
      email: String,
      telephone: String,
      faxNumber: String,
      url: String,
      availableLanguage: [String]
    },

    additionalContactPoints: [AdditionalContactPointsSchema],

    beneficialOwners: [BeneficialOwnersSchema]
  },
  { _id: false }
);
