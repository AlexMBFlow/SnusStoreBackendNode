import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import routers from "./routes/index.js";
import snusStoreController from "./controllers/snusStoreController.js"
import snusStore from "./models/snusStoreModel.js";
/* import createSnusStore from "./assets/createStore.js"; */

const PORT = 5000
const app = express()


//app use
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routers)

//model snusStore
const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost/test')
        const b = await snusStore.findById("624b3a9ee02eb0ef052f2ae1")
        console.log("ПРЯМО ИЗ МОНГО!!!!!", b)
        //!!const store = await snusStore.create(createSnusStore())
/*         const a = new snusStoreController()
        a. */
        app.listen(PORT, () => {
            console.log(`Server start on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()