import { Player } from "../entities/Player";

type PlayerPickedOnPercentage = {
  percentage: number;
  player: Player;
};

type MostAndLessPickedOn = {
  mostPickedOn: PlayerPickedOnPercentage;
  lessPickedOn: PlayerPickedOnPercentage;
};

export interface PlayersRepository{
  create(team: Player):Promise<void>;
  findByName(searchName?: string):Promise<Player[]>;
  findMostAndLessPickedOn(searchName?: string):Promise<MostAndLessPickedOn>;
}
