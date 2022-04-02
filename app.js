import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routers from "./routes/index.js";
import Order from "./models/userModel.js";

const PORT = 5000
const app = express()

//app use
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', routers)


const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost/test').then(
            () => {
                console.log("connect to MongoDB")
                const userOrder = new Order({
                    name: "Nictech",
                    taste: "Кокос",
                    packs: 20,
                    nicotine: 70,
                    saturation: "Очень крепкий",
                    price: 420,
                    avatar: 'http://voronezh-snus.space/uploads/images/big/5f3317f8-948e-4835-b53a-e398d70b5773.jpg',
                    id: 9,
                    rate: 5
                })
                /* userOrder.save(err => {
                    if (err) throw err
                    console.log("Order ADD!!")
                }) */
            },
            err => {
                console.log(err)
            }
        )
        app.listen(PORT, () => {
            console.log(`Server start on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()