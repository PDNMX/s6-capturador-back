interface IUser extends Document {
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  institucion: string;
  roles: string[];
  estatus: 'activo' | 'inactivo';
  createdAt: Date;
  updatedAt: Date;
}
