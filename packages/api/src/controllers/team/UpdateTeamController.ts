import { Request, Response } from "express";
import { TeamType } from "../../entities/Team";
import { UpdateTeamUsecase } from "../../usecases/team/UpdateTeamUsecase";

export class UpdateTeamController {
  constructor(
    private readonly updateTeamUsecase: UpdateTeamUsecase,
  ){}
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { id: idFromPath } = request.params;
    const { id, name, description, website, type } = request.body;
    if(idFromPath !== id){
      return response.status(405).json({
        message: 'ID in path different from id in body',
      }).send();
    }
    try {
      await this.updateTeamUsecase.execute({
        id,
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
