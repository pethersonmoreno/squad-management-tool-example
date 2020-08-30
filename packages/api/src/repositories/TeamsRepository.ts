import { Team } from "../entities/Team";

type TeamAverageAge = {
  average: number;
  team: Team;
};
type HighestAndLowestAverageAge = {
  highestList: TeamAverageAge[];
  lowestList: TeamAverageAge[];
}

export interface TeamsRepository{
  create(team: Team):Promise<void>;
  update(team: Team):Promise<void>;
  removeById(id: string):Promise<void>;
  
  getAll():Promise<Team[]>;
  findHighestLowestAgeByQtdTop():Promise<HighestAndLowestAverageAge>;
  findById(id: string):Promise<Team>;
}
