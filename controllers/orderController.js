class OrderController {
    Order(req, res, next) {
        const request = req
        console.log("requestQ", request.query)
        res.status(200).send("123")
    }
}
export default new OrderController()