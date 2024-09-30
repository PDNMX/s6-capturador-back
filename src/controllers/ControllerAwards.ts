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
    } catch (err: object | any) {
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

  static getById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await Record.getById({ id, data: null });
    const awards = data.record.award || null;

    res.json({ awards });
  };

  static addAward = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const awardData = JSON.parse(JSON.stringify(req.body));
    console.log("awardData: ", awardData);

    if (awardData.suppliers.length !== 0) {
      awardData.numberOfSuppliers = awardData.suppliers.length;
    }

    const data = await Record.update({ id, data: { awards: awardData } });
    res.json(data);
  };

  /*   static insertAward = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { body } = req;
    const data = await Record.insert(body); // Utiliza el modelo Record para insertar los datos de la seccion awards a la base de datos
    res.json(data);
  }; */

  /*   static updateData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id, data } = req.body;

      if (!id) {
        return res
          .status(400)
          .json({
            message: "Se requiere un ID válido en el cuerpo de la solicitud",
          });
      }

      if (!data || !data.award || Object.keys(data.award).length === 0) {
        return res
          .status(400)
          .json({
            message:
              "El cuerpo de la solicitud está vacío o no contiene datos de award",
          });
      }
 */
  // Función auxiliar para convertir fechas
}
export default ControllerAwards;
