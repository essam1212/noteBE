import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import {appRouter} from "./moduls/AllRouters.js";

import express from 'express';

//set directory dirname 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, './config/.env') })

const port = process.env.PORT 
const app = express()

appRouter(app)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen( port, () => console.log(`Example app listening on port ${port}!`))