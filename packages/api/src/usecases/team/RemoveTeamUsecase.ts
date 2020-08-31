import { TeamsRepository } from "../../repositories/TeamsRepository";

export class RemoveTeamUsecase{
  constructor(
    private teamsRepository: TeamsRepository,
  ){ }

  async execute(id: string) {
    await this.teamsRepository.removeById(id);
  }
}