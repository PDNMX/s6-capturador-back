import { Request } from "express";

export class AwardModel {
  
  static getStatus(req: Request): { status: string; reqBody: any } {
    return { status: 'ok', reqBody: req.body };
  }

  static insertAwards(req: Request): { status: string; reqBody: any } {
    return { status: 'ok', reqBody: req.body };
  }
}