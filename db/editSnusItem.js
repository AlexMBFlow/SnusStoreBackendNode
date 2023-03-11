import snusStore from "../models/snusStoreModel.js";

export const editSnusItem = async (snus) => {
    const { name, taste, packs, nicotine, saturation, price, avatar, _id } = snus;
    
    const replaceResult = await snusStore.updateOne({ "snus._id": _id }, {
        "$set": {
            "snus.$.name": name,
            "snus.$.taste": taste,
            "snus.$.packs": packs,
            "snus.$.nicotine": nicotine,
            "snus.$.saturation": saturation,
            "snus.$.price": price,
            "snus.$.avatar": avatar, //rate игнорируется
        }
    })
    console.log(replaceResult)
}