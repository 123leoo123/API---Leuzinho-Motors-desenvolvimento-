import { container } from "tsyringe";
import { AutomobileServices } from "../services/automobileServices";
import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.middleware";
import { isBrandExist } from "../middlewares/brand.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { automobileRegisterBodySchema, automobileUpdateSchema } from "../schemas/automobile.schema";
import { isAutomobileExist, isAutomobileOwner, isDuplicateAutomobile } from "../middlewares/automobiles.middleware";
import { AutomobilesControllers } from "../controllers/automobiles.controllers";

container.registerSingleton("AutomobileService", AutomobileServices);
const automobilesControllers = container.resolve(AutomobilesControllers);

export const automobileRouter = Router();

automobileRouter.use(validateToken.execute);

automobileRouter.post("/", validateToken.execute, isBrandExist.execute, validateBody.execute(automobileRegisterBodySchema), isDuplicateAutomobile.execute, (req, res) => automobilesControllers.create(req, res));
automobileRouter.get("/", (req, res) => automobilesControllers.findMany(req, res));
automobileRouter.get("/:id", isAutomobileOwner.execute, (req, res) => automobilesControllers.findMany(req, res));
// automobileRouter.get("/user/:id",  (req, res) => automobilesControllers.findMany(req, res));
automobileRouter.patch("/:id", isAutomobileExist.execute, isAutomobileOwner.execute, validateBody.execute(automobileUpdateSchema), (req, res) => automobilesControllers.update(req, res));
automobileRouter.delete("/:id", isAutomobileExist.execute, isAutomobileOwner.execute, (req, res) => automobilesControllers.delete(req, res));