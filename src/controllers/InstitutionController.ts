import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import Institution from '../models/institution/institution.model';

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
    const data = await Institution.addInstitution(req);
    res.json(data);
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
    const data = await Institution.updateInstitutionByID(req);
    res.json(data);
  };
  static deleteInstitution = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Institution.deleteInstitution(req);
    res.json(data);
  };
}

export default InstitutionController;
