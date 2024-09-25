import { Schema } from 'mongoose';
import mongooseService from '../../common/services/mongoose.service';
import { array } from 'yup';

const mongoo = mongooseService.getMongoose();

export const TenderSchema: Schema = new mongoo.Schema({
  title: String,
  description: String,
  status: String,
  amendments: []
});
