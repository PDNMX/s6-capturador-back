import { Request } from 'express';

// El model debe ser la conexion a la base de datos para acceder y guardar los datos

class Health {
  static getStatus: any = (req: Request) => {
    return { status: 'ok', req: req.body };
  };
}

export default Health;
