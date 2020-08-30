import { TeamsRepository } from "../../repositories/TeamsRepository";

export class GetAllTeamsUsecase{
  constructor(
    private teamsRepository: TeamsRepository
  ){ }

  async execute() {
    const allTeams = this.teamsRepository.getAll();

    return allTeams;
  }
}
