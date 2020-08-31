import { InstancesFactory } from "../InstancesFactory";
import { GetAllTeamsController } from "../../controllers/team/GetAllTeamsController";
import { GetAllTeamsUsecase } from "../../usecases/team/GetAllTeamsUsecase";
import { TeamsRepository } from "../../repositories/TeamsRepository";
import { MemoryTeamsRepository } from "../../repositories/implementations/MemoryTeamsRepository";
import { RemoveTeamController } from "../../controllers/team/RemoveTeamController";
import { RemoveTeamUsecase } from "../../usecases/team/RemoveTeamUsecase";
import { GetTeamController } from "../../controllers/team/GetTeamController";
import { GetTeamUsecase } from "../../usecases/team/GetTeamUsecase";

export class MemoryInstancesFactory implements InstancesFactory{
  createGetAllTeamsController(): GetAllTeamsController {
    return new GetAllTeamsController(this.createGetAllTeamsUsecase());
  }
  createRemoveTeamController(): RemoveTeamController {
    return new RemoveTeamController(this.createRemoveTeamUsecase());
  }
  createGetTeamController(): GetTeamController {
    return new GetTeamController(this.createGetTeamUsecase());
  }
  
  createGetAllTeamsUsecase(): GetAllTeamsUsecase {
    return new GetAllTeamsUsecase(this.createTeamsRepository());
  }
  createGetTeamUsecase(): GetTeamUsecase {
    return new GetTeamUsecase(this.createTeamsRepository());
  }
  createRemoveTeamUsecase(): RemoveTeamUsecase {
    return new RemoveTeamUsecase(this.createTeamsRepository());
  }
  createTeamsRepository(): TeamsRepository
   {
    return new MemoryTeamsRepository();
  }
}
