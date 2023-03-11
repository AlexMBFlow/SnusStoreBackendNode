import snusStoreController from "./snusStoreController.js";

class SnusController {
    async getSnus(req, res, next) {
        const snus = await snusStoreController.getSnusFromStore()
        res.json(snus)
    }
}
export default new SnusController()