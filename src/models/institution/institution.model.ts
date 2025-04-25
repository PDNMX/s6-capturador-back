import { Request } from 'express';
import { InstitutionModel } from './institution.schema';
import { CustomError } from '../../exceptions/customError';

class Institution {
  static addInstitution = async (req: Request) => {
    try {
      const { data } = req.body;

      const institution = new InstitutionModel({ ...data });
      const savedInstitution = await institution.save();

      return { ok: true, data: savedInstitution };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  static getAllInstitutions = async (req: Request) => {
    try {
      const users = await InstitutionModel.find();
      return users;
    } catch (error: any) {
      throw new CustomError('INS_002', 'Error al obtener las instituciones', 500, error.message);
    }
  };

  static getInstitutionByID = async (req: Request) => {
    try {
      const id = req.params.id;

      const user = await InstitutionModel.findById(id);

      if (!user) {
        throw new Error(`No se encontró la institución con el ID: ${id}`);
      }

      return { ok: 1, data: user };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  static updateInstitutionByID = async (req: Request) => {
    try {
      const id = req.params.id;
      const { data } = req.body;

      const updatedUser = await InstitutionModel.findByIdAndUpdate(id, data, { new: true, runValidators: true });

      if (!updatedUser) {
        throw new Error(`No se encontró la institución con el ID: ${id}`);
      }

      return { ok: 1, data: updatedUser };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  static deleteInstitution = async (req: Request) => {
    try {
      const id = req.params.id;

      const deletedInstitution = await InstitutionModel.findByIdAndDelete(id);
      if (!deletedInstitution) {
        throw new Error(`No se encontró la institución con el ID: ${id}`);
      }

      return { ok: 1 };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

export default Institution;
