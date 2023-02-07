import authRouter from './auth/auth.router.js';
import noteRouter from './note/note.router.js';
import { set } from "mongoose";

import { json } from 'express';
import connect from "../DB/connection.js";

import cors from 'cors';
import morgan from 'morgan';


export const appRouter = (app) => {
    // morgan check response
    if (process.env.MOOD === 'DEV') {
        app.use(morgan("dev"))
    } else {
        app.use(morgan("combined"))
    }
    app.use(json())
    app.use(cors())
    set('strictQuery', true)
    connect();
    // app.use(allRoutes.authRouter, allRoutes.userRouter);
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/note", noteRouter)
}

