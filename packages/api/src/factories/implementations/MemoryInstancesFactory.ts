import { InstancesFactory } from "../InstancesFactory";
import { GetAllTeamsController } from "../../controllers/team/GetAllTeamsController";
import { GetAllTeamsUsecase } from "../../usecases/team/GetAllTeamsUsecase";
import { TeamsRepository } from "../../repositories/TeamsRepository";
import { MemoryTeamsRepository } from "../../repositories/implementations/MemoryTeamsRepository";

export class MemoryInstancesFactory implements InstancesFactory{
  createGetAllTeamsController(): GetAllTeamsController {
    return new GetAllTeamsController(this.createGetAllTeamsUsecase());
  }
  createGetAllTeamsUsecase(): GetAllTeamsUsecase {
    return new GetAllTeamsUsecase(this.createTeamsRepository());
  }
  createTeamsRepository(): TeamsRepository
   {
    return new MemoryTeamsRepository();
  }
}
