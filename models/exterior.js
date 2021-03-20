const mongoose = require("mongoose")
const exteriorSchema = mongoose.Schema

const exteriorSchema = new Schema({
    customerName: {
        type: String,
    },
    smallEstimate: {
        type: String,
    },
    mediumEstimate: {
        type: String,
    },
    bigEstimate: {
        type: String,
    }
})
module.exports = mongoose.model("Exterior", exteriorSchema)
