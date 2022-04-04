import snusStore from "../models/snusStoreModel.js";

class snusStoreController {
    async getSnusFromMongo() {
        try {
            let store = await snusStore.findById('624b3a9ee02eb0ef052f2ae1')
            console.log(store)
            return JSON.stringify(store.schema.obj.snusItems)
            //console.log(store.schema.obj.snusItems[0].name)
            //return store
        } catch (e) {
            console.log(e)
        }
    }
}


export default snusStoreController