import express, { Request, Response } from "express";
import "express-async-errors"
import "dotenv/config";
import { json } from "express";
import "reflect-metadata";
<<<<<<< HEAD
import jwt from "jsonwebtoken";

export { app };




=======
import { handleErrors } from "./errors/handleErrors";
import { userRouter } from "./routes/user.router";
import { automobileRouter } from "./routes/automobile.router";
import { brandRouter } from "./routes/brand.router";
export { app };

console.log(process.env.EXAMPLE);
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6

const app = express();

app.use(json());

<<<<<<< HEAD
app.post("/login", (req: Request, res: Response) => {
    if (process.env.JWT_SECRET) {
        const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET);

        return res.status(200).json({ accessToken: token });
    }
}); 

=======
app.use(handleErrors.execute);

app.use("/user", userRouter);

app.use("/automobile", automobileRouter);

app.use("/brand", brandRouter);
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6



