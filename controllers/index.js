import { snusStore } from "../json.js"
class SnusController {
    getSnus(req, res, next) {
        const json = JSON.stringify(snusStore)
        //console.log(req)
        res.json(json)
    }
}
export default new SnusController()