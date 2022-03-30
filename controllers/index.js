class SnusController {
    getSnus(req, res, next) {
        console.log(req)
        res.send("hi")
    }
}
export default new SnusController()