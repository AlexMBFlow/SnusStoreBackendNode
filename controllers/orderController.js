import Order from "../models/orderModel.js";

class OrderController {
    Order(req, res, next) {
        const parce = JSON.parse(req.body.data)
        parce.basket.forEach(el => {
            delete el._id
        })
        new Order({
            order: {
                basket: parce.basket,
                info: parce.info
            }
        }).save(err => {
            if (err) throw err
        })
        res.status(200).send("OK")
    }
}
export default new OrderController()