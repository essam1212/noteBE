const  mongoose  = require("mongoose");
require("dotenv").config();

var cors = require('cors')
const helmet = require("helmet");
const allRoutes = require("./moduls/AllRouters")

const connect = require("./DB/connection");
const express = require('express')
const app = express()
app.use(helmet());

app.use(express.json())
app.use(cors())

const port =process.env.PORT ;

mongoose.set('strictQuery', true)
connect();
// app.use(allRoutes.authRouter, allRoutes.userRouter);
app.use("/api/v1/auth", allRoutes.authRouter);
app.use("/api/v1/note", allRoutes.noteRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen( port, () => console.log(`Example app listening on port ${port}!`))