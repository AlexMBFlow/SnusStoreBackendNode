import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routers from "./routes/index.js";
import { Bot } from "./telegraf/index.js";
import { PORT, TOKEN } from "./config.js";

const app = express()

//app use
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routers)


const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost/test')
        new Bot(TOKEN).init()
        app.listen(PORT, () => {
            console.log(`Server start on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()