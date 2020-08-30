import { Router } from "express";
import { MemoryInstancesFactory } from "./factories/implementations/MemoryInstancesFactory";
import { InstancesFactory } from "./factories/InstancesFactory";

const router = Router();

const instancesFactory: InstancesFactory = new MemoryInstancesFactory();

const getAllTeamsController = instancesFactory.createGetAllTeamsController();



router.get('/team', getAllTeamsController.handle);

//continuar no vídeo: https://www.youtube.com/watch?v=vAV4Vy4jfkc

//12min e 14seg

export { router };
