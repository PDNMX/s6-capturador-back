import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
// import Declaracion from '../models/declaracion.model';
import Health from '../models/health.model';
import Record from '../models/records.model';

class ControllerTender {
  static checkRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: object | any) {
      throw new ClientError('health_8001', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
    }

    next();
  };

  static getByID = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const data = await Record.getById({ id, data: null });

    const tender = data.record.tender || null;

    console.log('id: ', id);
    res.json({ id, data, tender });
  };

  static addTender = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const record = await Record.getById({ id, data: null });

    const data = { tender: req.body };

    const newRecord = await Record.update({ id, data });

    res.json({ record, id, data, newRecord });
  };

  // extra

  static health = async (req: Request, res: Response, next: NextFunction) => {
    const data = Health.getStatus(req);

    res.json(data);
  };

  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data2 = await Record.query(req.body);

    res.json(data2);
  };

  static deleteRecord = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    try {
      await Record.delete({ id, data: {} });
      res.json({ err: false, delete: true });
    } catch (error) {
      res.json({ err: true, error });
    }
  };

  static addRecord = async (req: Request, res: Response, next: NextFunction) => {
    const newRecord = {
      id: '',
      metadata: {
        canDelete: true
      }
    };

    try {
      const data = await Record.insert({ id: '', data: newRecord });
      res.json({ err: false, data: data.new });
    } catch (error) {
      res.json({ err: true, error });
    }
  };

  static getById = async (req: Request, res: Response, next: NextFunction) => {
    const data2 = await Record.getById(req.body);

    res.json(data2);
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

  static insertData = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.insert(body);

    res.json(data);
  };

  static deleteData = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const data = await Record.delete(body);

    res.json(data);
  };
}
export default ControllerTender;
