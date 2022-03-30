import express from "express";
import routers from "./routes/index.js";
const PORT = 3000;


const app = express()
app.use('/api', routers)

app.get('/', (req, res) => {
    res.send('hello snus');
});

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server start on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()