import { Router } from "express";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schema";
import { userControllers } from "../controllers/user.controllers";
import { UserServices } from "../services/userServices";
import { container } from "tsyringe";
import { validateToken } from "../middlewares/validateToken.middleware";

container.registerSingleton("UserServices", UserServices);

const UserControllers = container.resolve(userControllers)

export const userRouter = Router();

userRouter.post("/", ValidateBody.execute(userRegisterBodySchema), (req, res) => UserControllers.register(req, res)); 

userRouter.post("/login", ValidateBody.execute(userLoginBodySchema), (req, res) => UserControllers.login(req, res));

userRouter.get("/", validateToken.execute, (req, res) => UserControllers.getUser(req, res));