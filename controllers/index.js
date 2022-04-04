import { snusStore } from "../json.js";
//import snusStoreController from "../controllers/snusStoreController.js";


class SnusController {
    getSnus(req, res, next) {
        const json = JSON.stringify(snusStoreController.getSnusFromMongo())
        res.json(json)
    }
}
export default new SnusController()