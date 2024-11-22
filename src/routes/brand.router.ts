import { container } from "tsyringe";
import { BrandsServices } from "../services/brandServices";
import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { brandRegisterBodySchema } from "../schemas/brand.schema";
import { isBrandExist, isDuplicateBrandExist } from "../middlewares/brand.middleware";
import { BrandsControllers } from "../controllers/brands.controllers";

container.registerSingleton("BrandsServices", BrandsServices);
const brandControllers = container.resolve(BrandsControllers);

export const brandRouter = Router();

brandRouter.post("/", validateToken.execute, validateBody.execute(brandRegisterBodySchema), isDuplicateBrandExist.execute, (req, res) => brandControllers.create(req, res));
brandRouter.get("/", (req, res) => brandControllers.findAll(req, res));
brandRouter.delete("/:id", validateToken.execute, isBrandExist.execute, (req, res) => brandControllers.delete(req, res));
