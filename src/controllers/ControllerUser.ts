import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';

class ControllerUser {
  static checkRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: object | any) {
      throw new ClientError('tender_8001', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
    }

    next();
  };

  static createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const resp: object = {
      ok: 1
    };

    res.json(resp);
  };

  static getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const resp: object = {
      ok: 1
    };

    res.json(resp);
  };

  static getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const resp: object = {
      ok: 1
    };

    res.json(resp);
  };

  static updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const resp: object = {
      ok: 1
    };

    res.json(resp);
  };

  static deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const resp: object = {
      ok: 1
    };

    res.json(resp);
  };
}

export default ControllerUser;
