import { Router } from "express";
import { MemoryInstancesFactory } from "./factories/implementations/MemoryInstancesFactory";
import { InstancesFactory } from "./factories/InstancesFactory";

const router = Router();

const instancesFactory: InstancesFactory = new MemoryInstancesFactory();

const getAllTeamsController = instancesFactory.createGetAllTeamsController();
const removeTeamController = instancesFactory.createRemoveTeamController();
const getTeamController = instancesFactory.createGetTeamController();


router.get('/team', getAllTeamsController.handle);
router.delete('/team/:id', removeTeamController.handle);
router.get('/team/:id', getTeamController.handle);

export { router };
