import { Request, Response } from "express";
import { GetTeamUsecase } from "../../usecases/team/GetTeamUsecase";

export class GetTeamController {
  constructor(
    private readonly getTeamUsecase: GetTeamUsecase,
  ){}
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
    try {
      const team = await this.getTeamUsecase.execute(id);
      return response.status(200).json(team).send();
    } catch(err) {
      return response
        .status(400).json({
          message: err.message || 'Unexpected error',
        }).send();
    }
  }
}
