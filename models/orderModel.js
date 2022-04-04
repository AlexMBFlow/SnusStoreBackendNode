import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    order: {
        basket: [{
            name: String,
            taste: String,
            packs: Number,
            nicotine: Number,
            saturation: String,
            price: Number,
            avatar: String,
            rate: Number,
            created: Date
        }],
        info: {
            firstName: String,
            secondName: String,
            phone: Number,
            country: String,
            city: String,
            area: String,
            email: String,
            someInfo: String
        }
    }
})

const Order = mongoose.model("User", orderSchema)

export default Order