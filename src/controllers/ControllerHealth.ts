import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
// import Declaracion from '../models/declaracion.model';
import Health from '../models/health.model';

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

    res.json(data);
  };
}
export default ControllerHealth;
