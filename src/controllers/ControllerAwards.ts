import { AwardModel } from "./../models/awards.model";
import { NextFunction, Request, Response } from "express";
import { querySchema } from "../schemas/yup.query";
import { ClientError } from "../exceptions/clientError";
import { CustomError } from "../exceptions/customError";
import { IDataUpdate } from "../models/record.interface";
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
    const { id } = req.body;
    try {
      const data = await Record.getById({ id, data: {} });
      res.json(data);
    } catch (error) {
      next(error);
    }
  };

  static insertAward = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.insert(body); // Utiliza el modelo Record para insertar los datos de la seccion awards a la base de datos
    res.json(data);
  };

  static updateData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id, data } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Se requiere un ID válido en el cuerpo de la solicitud" });
      }

      if (!data || !data.award || Object.keys(data.award).length === 0) {
        return res.status(400).json({ message: "El cuerpo de la solicitud está vacío o no contiene datos de award" });
      }

      // Función auxiliar para convertir fechas
      const convertDates = (obj: any) => {
        for (const key in obj) {
          if (obj[key] instanceof Object) {
            convertDates(obj[key]);
          } else if (key.toLowerCase().includes('date') && typeof obj[key] === 'string') {
            obj[key] = new Date(obj[key]);
          }
        }
      };

      // Convertir todas las fechas en el objeto award
      convertDates(data.award);

      const updateData: IDataUpdate = {
        id,
        data: { award: data.award }
      };

      const result = await Record.update(updateData);

      if (!result) {
        return res.status(404).json({ message: "No se encontró el registro para actualizar" });
      }

      res.json(result);
    } catch (error) {
      if (error instanceof CustomError) {
        next(error);
      } else {
        next(new CustomError(
          "awards_1005",
          "Error al actualizar los datos de adjudicación",
          500,
          error instanceof Error ? error.message : "Ocurrió un error desconocido"
        ));
      }
    }
  };
}
export default ControllerAwards;
