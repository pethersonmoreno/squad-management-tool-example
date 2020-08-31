import { TeamsRepository } from "../../repositories/TeamsRepository";
import { Team } from "../../entities/Team";

export class CreateTeamUsecase{
  constructor(
    private teamsRepository: TeamsRepository,
  ){ }

  async execute(newTeam: Omit<Team, 'id'>) {
    const newTeamWithId = new Team(newTeam);
    await this.teamsRepository.create(newTeamWithId);
  }
}