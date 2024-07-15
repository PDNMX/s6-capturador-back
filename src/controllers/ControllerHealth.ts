import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
// import Declaracion from '../models/declaracion.model';
import Health from '../models/health.model';
import Record from '../models/records.model';

class ControllerHealth {
  static checkRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: object | any) {
      throw new ClientError('health_8001', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
    }

    next();
  };

  static executeQuery = async (req: Request, res: Response, next: NextFunction) => {
    const data = Health.getStatus(req);

    const data2 = await Record.queryPaginate(req.body);

    res.json({ data, data2 });
  };

  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data2 = await Record.queryPaginate(req.body);

    res.json(data2);
  };

  static query = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Record.query(req.body);

    res.json(data);
  };
}
export default ControllerHealth;
