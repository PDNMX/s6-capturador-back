import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import { CustomError } from '../exceptions/customError';
import User from '../models/user/user.schema';

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
    try {
      const { data } = req.body;
      const newUser = new User({ ...data });
      const savedUser = await newUser.save();

      res.status(201).json({ ok: true, data: savedUser });
    } catch (error: any) {
      throw new CustomError('USR_001', 'Error al crear el usuario', 400, error.message);
    }
  };

  static getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error: any) {
      throw new CustomError('USR_002', 'Error al obtener los usuarios', 500, error.message);
    }
  };

  static getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const {
        query: { id }
      } = req.body;

      console.log('id: ', id);

      const user = await User.findById(id);

      if (!user) {
        throw new CustomError('USR_003', 'Usuario no encontrado', 404, `No se encontró un usuario con el ID: ${id}`);
        return;
      }

      res.status(200).json({
        ok: 1,
        data: user
      });
    } catch (error: any) {
      throw new CustomError('USR_004', 'Error al obtener el usuario', 500, error.message);
    }
  };

  static updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const {
        query: { id },
        data
      } = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });

      if (!updatedUser) {
        throw new CustomError('USR_005', 'Usuario no encontrado', 404, `No se encontró un usuario con el ID: ${id}`);
        return;
      }

      res.status(200).json({ ok: 1, data: updatedUser });
    } catch (error: any) {
      throw new CustomError('USR_006', 'Error al actualizar el usuario', 400, error.message);
    }
  };

  static deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const {
        query: { id }
      } = req.body;

      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new CustomError('USR_007', 'Usuario no encontrado', 500, `No se encontró un usuario con el ID: ${id}`);
        return;
      }

      res.status(200).json({
        ok: 1
      });
    } catch (error: any) {
      throw new CustomError('USR_008', 'Error al eliminar el usuario', 500, error.message);
    }
  };
}

export default ControllerUser;
