import Order from "../models/orderModel.js";

class OrderController {
    Order(req, res, next) {
        const parce = JSON.parse(req.body.data)
        console.log("parce", parce)
        parce.basket.forEach( el => {
            delete el._id
        })
        console.log(parce.basket)
        //const parceInfo = JSON.parse(req.body.data.info)
        //console.log("requestQ", userOrder)
        //console.log(parce.basket)
        new Order({
            order: {
                basket: parce.basket,
                info: parce.info
            }
        }).save(err => {
            if (err) throw err
            console.log("Order ADD!!")
        })
        res.status(200)
    }
}
export default new OrderController()