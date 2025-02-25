import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
// import Declaracion from '../models/declaracion.model';
import Health from '../models/health.model';
import Record from '../models/record/records.model';

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

  static health = async (req: Request, res: Response, next: NextFunction) => {
    const data = Health.getStatus(req);

    res.json(data);
  };

  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data2 = await Record.query(req.body);

    res.json(data2);
  };

  static getById = async (req: Request, res: Response, next: NextFunction) => {
    const data2 = await Record.getById(req.body);

    res.json(data2);
  };

  static query = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Record.query(req.body);

    res.json(data);
  };

  static updateData = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.update(body);

    res.json(data);
  };

  static insertData = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.insert(body);

    res.json(data);
  };

  static deleteData = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.delete(body);

    res.json(data);
  };
}
export default ControllerHealth;
