import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import Record from '../models/record/records.model';

class ControllerParties {
  static checkRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: object | any) {
      throw new ClientError('parties_8001', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
    }

    next();
  };

  static getList = async (req: Request, res: Response) => {
    const { id, type } = req.params;

    const data = await Record.getById({ id, data: null });
    if (type) {
      const info = data.record.parties.filter(p => p.roles.includes(type)).map(p => ({ id: p.id, name: p.name, legalName: p.identifier.legalName, roles: p.roles }));

      res.json({ data: info });
    } else {
      const info = data.record.parties.map(p => ({ id: p.id, name: p.name, legalName: p.identifier.legalName, roles: p.roles }));
      res.json({ data: info });
    }
  };

  static getByID = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await Record.getById({ id, data: null });

    const parties = data.record.parties || null;

    res.json({ parties });
  };

  static addParties = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    // const doc = await Record.getById({ id, data: null });
    // const oldParties = JSON.parse(JSON.stringify(doc.record.parties));
    const partiesData = JSON.parse(JSON.stringify(req.body));

    // const newParties = { ...oldParties, ...partiesData };

    // const data = await Record.update({ id, data: { parties: newParties } });
    const data = await Record.update({ id, data: { ...partiesData } });

    res.json(data);
  };
}

export default ControllerParties;
