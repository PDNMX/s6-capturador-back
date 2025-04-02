import { Request } from 'express';
import { CustomError } from '../../exceptions/customError';
import { UserModel } from './user.schema';

class Users {
  static addUser = async (req: Request) => {
    try {
      const { data } = req.body;
      const newUser = new UserModel({ ...data });
      const savedUser = await newUser.save();

      return { ok: true, data: savedUser };
    } catch (error: any) {
      return { ok: false, error: error.message };
    }
  };

  static getAllUsers = async (req: Request) => {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error: any) {
      throw new CustomError('USR_002', 'Error al obtener los usuarios', 500, error.message);
    }
  };

  static getUserByID = async (req: Request) => {
    try {
      const id = req.params.id;
      console.log('id: ', id);

      const user = await UserModel.findById(id);

      if (!user) {
        // throw new CustomError('USR_003', 'Usuario no encontrado', 404, `No se encontró un usuario con el ID: ${id}`);
        throw new Error(`No se encontró un usuario con el ID: ${id}`);
      }

      return { ok: 1, data: user };
    } catch (error: any) {
      //   throw new CustomError('USR_004', 'Error al obtener el usuario', 500, error.message);
      throw new Error(error.message);
    }
  };

  static updateUserByID = async (req: Request) => {
    try {
      const id = req.params.id;
      const { data } = req.body;

      const updatedUser = await UserModel.findByIdAndUpdate(id, data, { new: true, runValidators: true });

      if (!updatedUser) {
        // throw new CustomError('USR_005', 'Usuario no encontrado', 404, `No se encontró un usuario con el ID: ${id}`);
        throw new Error(`No se encontró un usuario con el ID: ${id}`);
      }

      return { ok: 1, data: updatedUser };
    } catch (error: any) {
      //   throw new CustomError('USR_006', 'Error al actualizar el usuario', 400, error.message);
      throw new Error(error.message);
    }
  };

  static deleteUser = async (req: Request) => {
    try {
      const id = req.params.id;

      const deletedUser = await UserModel.findByIdAndDelete(id);
      if (!deletedUser) {
        // throw new CustomError('USR_007', 'Usuario no encontrado', 500, `No se encontró un usuario con el ID: ${id}`);
        throw new Error(`No se encontró un usuario con el ID: ${id}`);
      }

      return { ok: 1 };
    } catch (error: any) {
      //   throw new CustomError('USR_008', 'Error al eliminar el usuario', 500, error.message);
      throw new Error(error.message);
    }
  };
}

export default Users;
