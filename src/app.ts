import express from "express";
import "express-async-errors"
import "dotenv/config";
import { json } from "express";
import "reflect-metadata";
import jwt from "jsonwebtoken";
export { app };




// import { Jwt } from "jsonwebtoken";
// import { jwt } from "jsonwebtoken"

const app = express();

app.use(json());


jwt.sign(payload, secretKey);


