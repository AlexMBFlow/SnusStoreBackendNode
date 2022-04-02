class OrderController {
    Order(req, res, next) {
        const request = req
        console.log("requestQ", request)
        res.status(200).send("123")
    }
}
export default new OrderController()