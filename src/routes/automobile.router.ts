import { Router } from "express";
import { AutomobilesControllers } from "../controllers/automobiles.controllers";

export const automobileRouter = Router();

const automobilesControllers = new AutomobilesControllers();

automobileRouter.post("/:id/brand", )