import Order from "../models/orderModel.js";

class OrderController {
    Order(req, res, next) {
/*         console.log(req.body.data) */
        const parce = JSON.parse(req.body.data)
/*         //console.log("requestQ", userOrder) */
        new Order({
            order: [...parce]
        }).save(err => {
            if (err) throw err
            console.log("Order ADD!!")
        })
        res.status(200)
    }
}
export default new OrderController()