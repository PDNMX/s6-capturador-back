import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import { CustomError } from '../exceptions/customError';

import Users from '../models/user/user.model';

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
    const response: any = await Users.addUser(req);

    if (!response.ok) {
      throw new CustomError('USR_001', 'Error al crear el usuario', 400, response.error);
    }

    res.status(201).json(response);
  };

  static getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await Users.getAllUsers(req);
      res.status(200).json(users);
    } catch (error: any) {
      console.error('error123: ', error);
    }
  };

  static getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await Users.getUserByID(req);
      res.status(200).json(user);
    } catch (error: any) {
      throw new CustomError('USR_004', 'Error al obtener el usuario', 500, error.message);
    }
  };

  static updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const updatedUser = await Users.updateUserByID(req);
      res.status(200).json(updatedUser);
    } catch (error: any) {
      throw new CustomError('USR_006', 'Error al actualizar el usuario', 400, error.message);
    }
  };

  static deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const resp = await Users.deleteUser(req);
      res.status(200).json(resp);
    } catch (error: any) {
      throw new CustomError('USR_008', 'Error al eliminar el usuario', 500, error.message);
    }
  };
}

export default ControllerUser;
