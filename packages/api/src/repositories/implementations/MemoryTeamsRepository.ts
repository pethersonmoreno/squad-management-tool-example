import { TeamsRepository } from "../TeamsRepository";
import { Team } from "../../entities/Team";

let teamsList: Team[] = [
  new Team({ name: 'Barcelona', description: 'Barcelona Squad', type: 'Real' }),
  new Team({ name: 'Real Madrid', description: 'Real Madrid Squad', type: 'Real' }),
  new Team({ name: 'Milan', description: 'Milan Squad', type: 'Real' }),
  new Team({ name: 'Liverpool', description: 'Liverpool Squad', type: 'Real' }),
  new Team({ name: 'Bayer Munich', description: 'Bayer Munich Squad', type: 'Real' }),
  new Team({ name: 'Lazio', description: 'Lazio Squad', type: 'Real' }),
];

export class MemoryTeamsRepository implements TeamsRepository {
  async create(team: Team): Promise<void> {
    teamsList = [...teamsList, team]
  }
  async update(team: Team): Promise<void> {
    const teamFound = teamsList.find(currentTeam => currentTeam.id === team.id);
    if(!teamFound){
      throw new Error("Team not found");
    }
    teamsList = teamsList.map(currentTeam => {
      if(currentTeam === teamFound){
        return team;
      }
      return currentTeam;
    });
  }
  async removeById(id: string): Promise<void> {
    const teamFound = teamsList.find(team => team.id === id);
    if(!teamFound){
      throw new Error("Team not found");
    }
    teamsList = teamsList.filter(team => team !== teamFound);
  }

  async getAll(): Promise<Team[]> {
    return teamsList;
  }
  findHighestLowestAgeByQtdTop(): Promise<{ highestList: { average: number; team: Team; }[]; lowestList: { average: number; team: Team; }[]; }> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<Team> {
    const teamFound = teamsList.find(team => team.id === id);
    if(!teamFound){
      throw new Error("Team not found");
    }
    return teamFound;
  }
}
