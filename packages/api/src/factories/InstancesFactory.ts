import { GetAllTeamsController } from "../controllers/team/GetAllTeamsController";
import { RemoveTeamController } from "../controllers/team/RemoveTeamController";
import { GetTeamController } from "../controllers/team/GetTeamController";

export interface InstancesFactory {
  createGetAllTeamsController(): GetAllTeamsController;
  createRemoveTeamController(): RemoveTeamController;
  createGetTeamController(): GetTeamController;
}
