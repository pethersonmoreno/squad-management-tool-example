import { Request, Response } from "express";
import { CreateTeamUsecase } from "../../usecases/team/CreateTeamUsecase";
import { TeamType } from "../../entities/Team";

export class CreateTeamController {
  constructor(
    private readonly createTeamUsecase: CreateTeamUsecase,
  ){}
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { name, description, website, type } = request.params;
    try {
      await this.createTeamUsecase.execute({
        name,
        description,
        website,
        type: type as TeamType,
      });
      return response.status(200).send();
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      }).send();
    }
  }
}
