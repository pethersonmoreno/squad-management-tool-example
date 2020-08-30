import { Request, Response } from "express";
import { GetAllTeamsUsecase } from "../../usecases/team/GetAllTeamsUsecase";

export class GetAllTeamsController {
  constructor(
    private readonly getAllTeamsUsecase: GetAllTeamsUsecase,
  ){}
  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const list = await this.getAllTeamsUsecase.execute();
      return response.status(200).json(list).send();
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
