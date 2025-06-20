import { model, Schema } from 'mongoose';
import IUser from './user.interface';

const UserSchema: Schema = new Schema<IUser>(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    primerApellido: {
      type: String,
      required: true,
      trim: true
    },
    segundoApellido: {
      type: String,
      trim: true
    },
    institution: {
      type: Schema.Types.ObjectId,
      ref: 'Institutions',
      required: true
    },
    estatus: {
      type: String,
      required: true,
      enum: ['activo', 'inactivo'],
      default: 'activo'
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    scope: [
      {
        type: String,
        required: true,
        enum: ['admin', 'usuario', 'read']
      }
    ],
    client_id: {
      type: String,
      required: true
    },
    client_secret: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const UserModel = model<IUser>('Oauth', UserSchema);
