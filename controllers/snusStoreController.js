import snusStore from "../models/snusStoreModel.js";
import mongoose from "mongoose";

class snusStoreController {
    async getSnusFromMongo() {
        try {
            const b = await snusStore.findById("624b3a9ee02eb0ef052f2ae1")
            console.log("ПРЯМО ИЗ МОНГО!!!!!", b.snus)
            const json = JSON.stringify(b.snus)
            return json
            //return JSON.stringify(store.schema.obj.snusItems)
            //console.log(store.schema.obj.snusItems[0].name)
            //return store
        } catch (e) {
            console.log(e)
        }
    }
}


export default new snusStoreController()