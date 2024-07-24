import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import { ContractModel } from '../models/contracts/contracts.model';
import Record from '../models/records.model';
import { contractData, itemContractData } from '../schemas/contract.yup.query';

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

  /* En esta sección se valida contra el esquema de yup */
  static prueba = async (req: Request, res: Response, next: NextFunction) => { 
    /*     const contractValueData = {
          value: {
            amount: 1000+1,
            currency: ['USD'],
          },
        }; */
        const contractValueData = req.body;
        try {
          await itemContractData.validate(contractValueData);
          console.log("hola desde el back");
          console.log(contractValueData);
          res.send({messg:"todo muy bien"});
        } catch (err: any) {
          throw new ClientError('Contracts_8002', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
          res.send({"status": "chale"});
        }
    
        /* const data = await ContractModel.insertContract(req);
        res.json(data); */
  };

  static insertData = async (req: Request, res: Response, next: NextFunction) => {
    //delete req.body.id;
    //const { body } = req;
    const { body } = req;
    console.log("body desde insertData en controllerContract", body );
    const data = await Record.insert(body);

    res.json(data);
  };

  static executeQuery = async (req: Request, res: Response, next: NextFunction) => {
    /* const data = await ContractModel.getStatus(req);
    res.json(data); */
    let body = req.body;
    // Corrigiendo la sintaxis de res.send()
    //console.log("body", body );
    res.send({
      body
    });
  };

  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const id = body.id;
    delete body.id;

    const data = await Record.query(req.body);

    res.json(data);
  };

  static getById = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Record.getById(req.body);

    res.json(data);
  };

  static query = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Record.query(req.body);

    res.json(data);
  };

  static updateData = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.update(body);

    res.json(data);
  };

}

export default ControllerContracts;