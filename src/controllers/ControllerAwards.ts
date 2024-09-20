import { AwardModel } from "./../models/awards.model";
import { NextFunction, Request, Response } from "express";
import { querySchema } from "../schemas/yup.query";
import { ClientError } from "../exceptions/clientError";
import Record from "../models/records.model";

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
        "Awards_8001",
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

  static getById = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Record.getById(req.body);

    res.json(data);
  };

  static insertAward = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.insert(body); // Utiliza el modelo Record para insertar los datos de la seccion awards a la base de datos
    res.json(data);
  };

    /**
   * Actualiza un registro de premio existente en la base de datos.
   * @param req - Objeto de solicitud Express que contiene los datos actualizados de awards en el cuerpo (body).
   * @param res - Objeto de respuesta Express para enviar el resultado al cliente.
   */
  static updateData = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.update(body);
    res.json(data); // envia los datos actualizados
  };
}
export default ControllerAwards;
