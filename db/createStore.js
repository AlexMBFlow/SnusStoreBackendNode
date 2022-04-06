import snusStore from "../models/snusStoreModel.js";

//создать стор
const createStore = async () => {
  const store = await snusStore.create(createSnusStore())
  return store
}