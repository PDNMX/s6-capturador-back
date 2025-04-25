import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import Institution from '../models/institution/institution.model';
import { CustomError } from '../exceptions/customError';

class InstitutionController {
  static checkRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: object | any) {
      throw new ClientError('tender_8001', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
    }

    next();
  };

  static createInstitution = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await Institution.addInstitution(req);
      res.json(data);
    } catch (error: any) {
      throw new CustomError('INS_001', 'Error al registrar la institución', 500, error.message);
    }
  };
  static getAllInstitutions = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Institution.getAllInstitutions(req);
    res.json(data);
  };
  static getInstitutionByID = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Institution.getInstitutionByID(req);
    res.json(data);
  };
  static updateInstitution = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedUser = await Institution.updateInstitutionByID(req);
      res.status(200).json(updatedUser);
    } catch (error: any) {
      throw new CustomError('INS_006', 'Error al actualizar la institución', 400, error.message);
    }
  };
  static deleteInstitution = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resp = await Institution.deleteInstitution(req);
      res.status(200).json(resp);
    } catch (error: any) {
      throw new CustomError('INS_008', 'Error al eliminar la institución', 500, error.message);
    }
  };
}

export default InstitutionController;
