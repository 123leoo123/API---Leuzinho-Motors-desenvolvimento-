import express from "express";
import "express-async-errors"
import "dotenv/config";
import { json } from "express";
import "reflect-metadata";
import { handleErrors } from "./errors/handleErrors";
import { userRouter } from "./routes/user.router";
import { automobileRouter } from "./routes/automobile.router";
import { brandRouter } from "./routes/brand.router";
export { app };

console.log(process.env.EXAMPLE);

const app = express();

app.use(json());

app.use(handleErrors.execute);

app.use("/user", userRouter);

app.use("/automobile", automobileRouter);

app.use("/brand", brandRouter);



