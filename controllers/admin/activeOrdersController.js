/* import { editSnusItem } from "../../db/editSnusItem.js";

 */
import Order from "../../models/orderModel.js";
class ActiveOrdersController {
    getAllActiveOrders(req, res, next) {
        let myOrders = []
        /* const payload = JSON.parse(req.body.data); */
        const boba = Order.find({}, (err, order) => {
            myOrders.push(order)
        })
        //console.dir(boba)
        console.dir(myOrders, "myOrders")
        res.status(200).send("OK")        
    }
}

export default new ActiveOrdersController()