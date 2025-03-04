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
    institucion: {
      type: String,
      required: true,
      enum: ['Institución1', 'Institución2', 'Institución3'] // Ajusta según tu catálogo
    },
    roles: [
      {
        type: String,
        enum: ['admin', 'usuario', 'editor'] // Ajusta según necesites
      }
    ],
    estatus: {
      type: String,
      required: true,
      enum: ['activo', 'inactivo'],
      default: 'activo'
    }
  },
  {
    timestamps: true
  }
);

export default model<IUser>('User', UserSchema);
