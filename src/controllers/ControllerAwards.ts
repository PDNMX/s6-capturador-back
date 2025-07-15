import { NextFunction, Request, Response } from "express";
import { querySchema } from "../schemas/yup.query";
import { ClientError } from "../exceptions/clientError";

import Record from "../models/record/records.model";

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
    } catch (err: object | any) {
      throw new ClientError(
        "Awards_8001",
        "Error en la consulta enviada",
        `${err.path}: ${err.errors}`
      );
    }

    next();
  };


  static query = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Record.query(req.body);

    res.json(data);
  };

  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const id = body.id;
    delete body.id;

    const data = await Record.query(req.body);

    res.json(data);
  };

  static getById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await Record.getById({ id, data: null });
    const awards = data.record.awards || null;

    res.json({ awards });
  };

  static addAwards = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const awardsData = JSON.parse(JSON.stringify(req.body));

  
    const data = await Record.update({ id, data: { ...awardsData } });
    res.json(data);
  };
}
export default ControllerAwards;
