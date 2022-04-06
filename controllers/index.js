import snusStoreController from "../controllers/snusStoreController.js";

class SnusController {
    async getSnus(req, res, next) {
        const snus = await snusStoreController.getSnusFromMongo()
        res.json(snus)
    }
}
export default new SnusController()