import snusStore from "../models/snusStoreModel.js";

export const getSnusStoreFromDB = async (id) => {
    const store = await snusStore.findById(id)
    return store
}
