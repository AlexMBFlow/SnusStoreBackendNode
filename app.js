import express from "express";
import routers from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 5000;
const app = express()

app.use(cors())
app.use('/api', routers)

app.get('/', (req, res) => {
    res.send('hello');
});

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost/test');
        app.listen(PORT, () => {
            console.log(`Server start on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()