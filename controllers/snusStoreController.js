import { getSnusStoreFromDB } from "../db/getSnusStoreFromDB.js";

class snusStoreController {
    async getSnusFromMongo() {
        try {
            const store =  await getSnusStoreFromDB("624b3a9ee02eb0ef052f2ae1")
            const json = JSON.stringify(store.snus)

            return json
        } catch (e) {
            console.log(e)
        }
    }
}

export default new snusStoreController()