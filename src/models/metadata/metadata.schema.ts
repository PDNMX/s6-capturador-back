import { Schema } from 'mongoose';
import mongooseService from '../../common/services/mongoose.service';

const mongoo = mongooseService.getMongoose();

export const MetadataSchema: Schema = new mongoo.Schema(
  {
    canDelete: Boolean
  },
  { _id: false }
);
