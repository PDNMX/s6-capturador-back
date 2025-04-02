import { Request } from 'express';
import { InstitutionModel } from './institution.schema';

const mockResp = { ok: 1 };

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
    return mockResp;
  };

  static getInstitutionByID = async (req: Request) => {
    return mockResp;
  };

  static updateInstitutionByID = async (req: Request) => {
    return mockResp;
  };

  static deleteInstitution = async (req: Request) => {
    return mockResp;
  };
}

export default Institution;
