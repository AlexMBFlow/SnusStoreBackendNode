import express from "express";
import routers from "./routes/index.js";
import mongoose from "mongoose";

const PORT = 3000;

const app = express()
app.use('/api', routers)

app.get('/', (req, res) => {
    res.send('hello snus');
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