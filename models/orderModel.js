import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    order: [{
        name: String,
        taste: String,
        packs: Number,
        nicotine: Number,
        saturation: String,
        price: Number,
        avatar: String,
        rate: Number,
        created: Date
    }]
})

const Order = mongoose.model("User", orderSchema)

export default Order