import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
// import Declaracion from '../models/declaracion.model';
import Health from '../models/health.model';
import Record from '../models/record/records.model';
import { decode } from 'jsonwebtoken';
import { IDataToken } from '../models/record/record.interface';
import Users from '../models/user/user.model';

class ControllerRecords {
  static checkRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: object | any) {
      throw new ClientError('health_8001', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
    }

    next();
  };

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
    const token = req.headers.authorization?.split(' ')[1] || '';
    const { username } = decode(token) as IDataToken;

    const info = await Users.getUserByUsername(username);

    const newRecord = {
      id: '',
      institution: info.institution,
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
    const token = req.headers.authorization?.split(' ')[1] || '';
    const { username } = decode(token) as IDataToken;

    const info = await Users.getUserByUsername(username);

    const nQuery = {
      ...req.body.query,
      institution: info.institution
    };

    const nReq = {
      ...req.body,
      query: nQuery
    };

    console.log('nReq: ', nReq);
    console.log('req.body: ', req.body);

    const data = await Record.query(nReq);

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
export default ControllerRecords;
