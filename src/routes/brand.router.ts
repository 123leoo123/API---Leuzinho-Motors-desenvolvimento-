import { Router } from "express";
import { BrandServices } from "../services/brandServices";
import { container } from "tsyringe";
import { BrandsControllers } from "../controllers/brands.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { brandRegisterBodySchema } from "../schemas/brand.schema";


container.registerSingleton("BrandServices", BrandServices);

const brandControllers = container.resolve(BrandsControllers);

export const brandRouter = Router();

brandRouter.post("/", ValidateBody.execute(brandRegisterBodySchema), )