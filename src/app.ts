import express, { Request, Response } from "express";
import "express-async-errors"
import "dotenv/config";
import { json } from "express";
import "reflect-metadata";
import jwt from "jsonwebtoken";

export { app };





const app = express();

app.use(json());

app.post("/login", (req: Request, res: Response) => {
    if (process.env.JWT_SECRET) {
        const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET);

        return res.status(200).json({ accessToken: token });
    }
}); 




