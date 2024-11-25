<<<<<<< HEAD
import { Router } from "express";
import { AutomobilesControllers } from "../controllers/automobiles.controllers";

export const automobileRouter = Router();

const automobilesControllers = new AutomobilesControllers();

automobileRouter.post("/:id/brand", )
=======
import { container } from "tsyringe";
import { AutomobilesServices } from "../services/automobileServices";
import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.middleware";
import { isBrandExist } from "../middlewares/brand.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { automobileRegisterBodySchema, automobileUpdateSchema } from "../schemas/automobile.schema";
import { isAutomobileExist, isAutomobileOwner, isDuplicateAutomobile } from "../middlewares/automobiles.middleware";
import { AutomobilesControllers } from "../controllers/automobiles.controllers";

container.registerSingleton("AutomobilesServices", AutomobilesServices);
const automobilesControllers = container.resolve(AutomobilesControllers);

export const automobileRouter = Router();

automobileRouter.use(validateToken.execute);

automobileRouter.post("/", validateToken.execute, isBrandExist.execute, validateBody.execute(automobileRegisterBodySchema), isDuplicateAutomobile.execute, (req, res) => automobilesControllers.create(req, res));
automobileRouter.get("/", (req, res) => automobilesControllers.findMany(req, res));
automobileRouter.get("/:id", validateToken.execute, isAutomobileOwner.execute, (req, res) => automobilesControllers.findMany(req, res));
// automobileRouter.get("/user/:id",  (req, res) => automobilesControllers.findMany(req, res));
automobileRouter.patch("/:id", validateToken.execute, isAutomobileExist.execute, isAutomobileOwner.execute, validateBody.execute(automobileUpdateSchema), (req, res) => automobilesControllers.update(req, res));
automobileRouter.delete("/:id", validateToken.execute, isAutomobileExist.execute, isAutomobileOwner.execute, (req, res) => automobilesControllers.delete(req, res));
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
