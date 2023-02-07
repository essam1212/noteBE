
import { set } from "mongoose";
require("dotenv").config();

import cors from 'cors';
import helmet from "helmet";
import { authRouter, noteRouter } from "./moduls/AllRouters";

import connect from "./DB/connection";
import express, { json } from 'express';
const app = express()
app.use(helmet());

app.use(json())
app.use(cors())

const port =process.env.PORT ;

set('strictQuery', true)
connect();
// app.use(allRoutes.authRouter, allRoutes.userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/note", noteRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen( port, () => console.log(`Example app listening on port ${port}!`))