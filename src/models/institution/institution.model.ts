import { Request } from 'express';

const mockResp = { ok: 1 };

class Institution {
  static addInstitution = async (req: Request) => {
    return mockResp;
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
