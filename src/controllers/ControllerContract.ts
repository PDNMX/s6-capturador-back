import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import { ContractModel } from '../models/contracts.model';

class ControllerContracts {
  static checkRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: any) {
      throw new ClientError('Contracts_8001', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
    }

    next();
  };

  static executeQuery = async (req: Request, res: Response, next: NextFunction) => {
    /* const data = await ContractModel.getStatus(req);
    res.json(data); */
    let body = req.body;
    // Corrigiendo la sintaxis de res.send()
    console.log("body", body );
    res.send({
      body
    });
  };

  static insertContract = async (req: Request, res: Response, next: NextFunction) => {
    const data = await ContractModel.insertContract(req);
    res.json(data);
  }
}

export default ControllerContracts;