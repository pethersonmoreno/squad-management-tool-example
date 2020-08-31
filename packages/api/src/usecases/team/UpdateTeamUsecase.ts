import { TeamsRepository } from "../../repositories/TeamsRepository";
import { Team } from "../../entities/Team";

export class UpdateTeamUsecase{
  constructor(
    private teamsRepository: TeamsRepository,
  ){ }

  async execute(team: Team) {
    await this.teamsRepository.update(team);
  }
}