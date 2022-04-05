import { snusStore } from "../json.js";
import snusStoreController from "../controllers/snusStoreController.js";


class SnusController {
    async getSnus(req, res, next) {
        console.log("sd")
        const snus = await snusStoreController.getSnusFromMongo()
        res.json(snus)
        /* const json = JSON.stringify(snusStoreController.getSnusFromMongo())
        res.json(json) */
    }
}
export default new SnusController()