import { TeamsRepository } from "../../repositories/TeamsRepository";

export class GetTeamUsecase{
  constructor(
    private teamsRepository: TeamsRepository
  ){ }

  async execute(id: string) {
    const teamFound = await this.teamsRepository.findById(id);

    return teamFound;
  }
}
