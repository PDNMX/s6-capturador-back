import { NextFunction, Request, Response } from 'express';
import { querySchema } from '../schemas/yup.query';
import { ClientError } from '../exceptions/clientError';
import Record from '../models/records.model';



class ControllerPlanning {
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
            'Planning_8001', 
            'Error en la consulta enviada', 
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
    
      static getByID = async (req: Request, res: Response) => {
        const id = req.params.id;
        const data = await Record.getById({ id, data: null });
    
        const planning = data.record.planning || null;
    
        console.log('id: ', id);
        res.json({ planning });
      };
    
      static addPlanning = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
    
    
        const planningData = JSON.parse(JSON.stringify(req.body));
        console.log('planningData: ', planningData);


        const data = await Record.update({ id, data: {...planningData} });

        res.json({ data });
    
      };
    
      // extra
    

    }
    export default ControllerPlanning;