import { Request, Response } from "express";
import { RemoveTeamUsecase } from "../../usecases/team/RemoveTeamUsecase";

export class RemoveTeamController {
  constructor(
    private readonly removeTeamUsecase: RemoveTeamUsecase,
  ){}
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
    try {
      await this.removeTeamUsecase.execute(id);
      return response.status(200).send();
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      }).send();
    }
  }
}
