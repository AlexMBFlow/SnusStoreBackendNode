import { editSnusItem } from "../../db/editSnusItem.js";


class EditsController {
    editProduct(req, res, next) {
        const payload = JSON.parse(req.body.data);
        editSnusItem(payload)

        res.status(200).send("OK")        
    }
}

export default new EditsController()