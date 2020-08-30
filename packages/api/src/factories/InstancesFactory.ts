import { GetAllTeamsController } from "../controllers/team/GetAllTeamsController";

export interface InstancesFactory {
  createGetAllTeamsController(): GetAllTeamsController;
}
