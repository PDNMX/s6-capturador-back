import { Request } from "express";

export class PlanningModel {

    static getStatus(req:Request): {status:string; reqBody:any }{
        return {status:'ok', reqBody: req.body };
    }

    static insertPlanning(req:Request): {status: string; reqBody:any } {
        return { status: 'ok', reqBody: req.body };
    }
}