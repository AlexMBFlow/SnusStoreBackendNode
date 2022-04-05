import mongoose from "mongoose";
/* const snusItemModel = mongoose.Schema({
    name: String,
    taste: String,
    packs: Number,
    nicotine: Number,
    saturation: String,
    price: Number,
    avatar: String,
    rate: Number,
}) */

const snusStoreModel = new mongoose.Schema({
    snus: [{
    name: String,
    taste: String,
    packs: Number,
    nicotine: Number,
    saturation: String,
    price: Number,
    avatar: String,
    rate: Number,
}]
})

const snusStore = mongoose.model("snusstore", snusStoreModel)

export default snusStore