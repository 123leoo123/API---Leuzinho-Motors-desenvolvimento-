import { container } from "tsyringe";
import { userControllers } from "../controllers/user.controllers";
import { Router } from "express";
import { UserServices } from "../services/userServices";
import { validateBody } from "../middlewares/validateBody.middleware";
import { UserCreate, userLogin } from "../schemas/user.schema";
import { isEmailAlreadyRegistered } from "../middlewares/user.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";

container.registerSingleton("UserServices", UserServices);

const UserControllers = container.resolve(userControllers);

export const userRouter = Router();

userRouter.post("/", validateBody.execute(UserCreate), isEmailAlreadyRegistered.execute, (req, res) => UserControllers.register(req, res));

userRouter.post("/login", validateToken.execute, validateBody.execute(userLogin), (req, res) => UserControllers.login(req, res));

// updateProfile