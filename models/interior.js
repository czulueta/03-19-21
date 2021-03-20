const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    customerName: {
        type: String,
        required: true,
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

module.exports = mongoose.model("Interior", interiorSchema)