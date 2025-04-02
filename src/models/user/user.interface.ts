interface IUser extends Document {
  id: string;
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  institucion: string;
  roles: string[];
  estatus: 'activo' | 'inactivo';
  createdAt: Date;
  updatedAt: Date;
}

export default IUser;
