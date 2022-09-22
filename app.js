import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import routerShop from "./routes/index.js";
import routerAdmin from "./routes/admin/index.js";
import Bot from "./telegraf/index.js";
import { PORT, SOCKET_PORT } from "./config.js";
import { initSocket } from "./services/socket/index.js";

const app = express()

initSocket(SOCKET_PORT)

//app use
app.use(cors()) // Корс
app.use(express.json()) // Обработка json'ов
app.use('/api', routerShop) // Shop
app.use('/admin', routerAdmin) // Admin Panel
app.use('/public', express.static(path.resolve() + '/public')); // Картинки

const start = async () => {
    try {
        //Подключаемся к бд
        await mongoose.connect('mongodb://localhost/test')
        //Включаем бота
        Bot.init()
        //Слушаем команду /start в чате с ботом, чтобы обновить chatID
        Bot.startCmd()
        //Запускаем express
        app.listen(PORT, () => {
            console.log(`Server start on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()