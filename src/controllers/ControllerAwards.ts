import { AwardModel } from "./../models/awards.model";
import { NextFunction, Request, Response } from "express";
import { querySchema } from "../schemas/yup.query";
import { ClientError } from "../exceptions/clientError";

//import * as yup from 'yup';
import { AwardData } from "../schemas/awards.yup.query";
class ControllerAwards {
  static checkRequest = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: any) {
      throw new ClientError(
        "Contracts_8001",
        "Error en la consulta enviada",
        `${err.path}: ${err.errors}`
      );
    }

    next();
  };

  static executeQuery = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    /* const data = await ContractModel.getStatus(req);
    res.json(data); */
    let body = req.body;
    // Corrigiendo la sintaxis de res.send()
    console.log("body", body);
    res.send({
      body,
    });
  };

  static insertAward = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    /*     const contractValueData = {
      value: {
        amount: 1000+1,
        currency: ['USD'],
      },
    }; */
    const awardValueData = req.body;
    try {
      await AwardData.validate(awardValueData);
      res.send({ messg: "todo muy bien" });
    } catch (err: any) {
      throw new ClientError(
        "Contracts_8002",
        "Error en la consulta enviada",
        `${err.path}: ${err.errors}`
      );
      res.send({ status: "chale" });
    }

    /* const data = await ContractModel.insertContract(req);
    res.json(data); */
  };
}
export default ControllerAwards;
