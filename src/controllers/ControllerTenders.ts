import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import Record from '../models/records.model';

class ControllerTender {
  static checkRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await querySchema.validate(body);
    } catch (err: object | any) {
      throw new ClientError('tender_8001', 'Error en la consulta enviada', `${err.path}: ${err.errors}`);
    }

    next();
  };

  static getByID = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await Record.getById({ id, data: null });

    const tender = data.record.tender || null;

    res.json({ tender });
  };

  static addTender = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    // const doc = await Record.getById({ id, data: null });
    // const oldTender = JSON.parse(JSON.stringify(doc.record.tender));
    const tenderData = JSON.parse(JSON.stringify(req.body));
    // console.log('tenderData: ', tenderData);

    if (tenderData.tenderers.length !== 0) {
      tenderData.numberOfTenderers = tenderData.tenderers.length;
    }

    // const newTender = { ...oldTender, ...tenderData };

    // const data = await Record.update({ id, data: { tender: newTender } });
    const data = await Record.update({ id, data: { tender: tenderData } });

    res.json(data);
  };

}

export default ControllerTender;
