<<<<<<< HEAD
import { Router } from "express";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schema";
import { userControllers } from "../controllers/user.controllers";
import { UserServices } from "../services/userServices";
import { container } from "tsyringe";
=======
import { container } from "tsyringe";
import { userControllers } from "../controllers/user.controllers";
import { Router } from "express";
import { UserServices } from "../services/userServices";
import { validateBody } from "../middlewares/validateBody.middleware";
import { UserCreate, userLogin } from "../schemas/user.schema";
import { isEmailAlreadyRegistered } from "../middlewares/user.middleware";
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
import { validateToken } from "../middlewares/validateToken.middleware";

container.registerSingleton("UserServices", UserServices);

<<<<<<< HEAD
const UserControllers = container.resolve(userControllers)

export const userRouter = Router();

userRouter.post("/", ValidateBody.execute(userRegisterBodySchema), (req, res) => UserControllers.register(req, res)); 

userRouter.post("/login", ValidateBody.execute(userLoginBodySchema), (req, res) => UserControllers.login(req, res));

userRouter.get("/", validateToken.execute, (req, res) => UserControllers.getUser(req, res));
=======
const UserControllers = container.resolve(userControllers);

export const userRouter = Router();

userRouter.post("/", validateBody.execute(UserCreate), isEmailAlreadyRegistered.execute, (req, res) => UserControllers.register(req, res));

userRouter.post("/login", validateToken.execute, validateBody.execute(userLogin), (req, res) => UserControllers.login(req, res));

// updateProfile
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
