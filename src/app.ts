import express from "express";
import "express-async-errors"
import "dotenv/config";
import { json } from "express";
import "reflect-metadata";
import { handleErrors } from "./errors/handleErrors";
export { app };

console.log(process.env.EXAMPLE);

const app = express();

app.use(json());

app.use(handleErrors.execute);




