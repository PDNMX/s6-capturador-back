import { Request } from 'express';

// El model debe ser la conexión a la base de datos para acceder y guardar los datos
export class ContractModel {
  static getStatus(req: Request): { status: string; reqBody: any } {
    return { status: 'ok', reqBody: req.body };
  }

  static insertContract(req: Request): { status: string; reqBody: any } {
    return { status: 'ok', reqBody: req.body };
  }
}
