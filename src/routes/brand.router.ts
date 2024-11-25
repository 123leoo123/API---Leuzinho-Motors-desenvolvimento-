<<<<<<< HEAD
import { Router } from "express";
import { BrandServices } from "../services/brandServices";
import { container } from "tsyringe";
import { BrandsControllers } from "../controllers/brands.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { brandRegisterBodySchema } from "../schemas/brand.schema";


container.registerSingleton("BrandServices", BrandServices);

=======
import { container } from "tsyringe";
import { BrandsServices } from "../services/brandServices";
import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { brandRegisterBodySchema } from "../schemas/brand.schema";
import { isBrandExist, isDuplicateBrandExist } from "../middlewares/brand.middleware";
import { BrandsControllers } from "../controllers/brands.controllers";

container.registerSingleton("BrandsServices", BrandsServices);
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
const brandControllers = container.resolve(BrandsControllers);

export const brandRouter = Router();

<<<<<<< HEAD
brandRouter.post("/", ValidateBody.execute(brandRegisterBodySchema), )
=======
brandRouter.post("/", validateToken.execute, validateBody.execute(brandRegisterBodySchema), isDuplicateBrandExist.execute, (req, res) => brandControllers.create(req, res));
brandRouter.get("/", (req, res) => brandControllers.findAll(req, res));
brandRouter.delete("/:id", validateToken.execute, isBrandExist.execute, (req, res) => brandControllers.delete(req, res));
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
