import { snusStore } from "../json.js"
class SnusController {
    getSnus(req, res, next) {
        const json = JSON.stringify(snusStore)
        res.json(json)
    }
}
export default new SnusController()