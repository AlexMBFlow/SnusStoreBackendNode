import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import routers from "./routes/index.js";
import Order from "./models/orderModel.js";

const PORT = 5000
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
        app.listen(PORT, () => {
            console.log(`Server start on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()