import { IInstitution } from '../institution/institution.interface';

interface IUser extends Document {
  id: string;
  username: string;
  password: string;
  scope: string[];
  client_id: string;
  client_secret: string;
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  institution: IInstitution;  
  estatus: 'activo' | 'inactivo';
  createdAt: Date;
  updatedAt: Date;
}

export default IUser;
