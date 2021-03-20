const express = require("express")
const exterior = require("../models/exterior.js")
const exteriorRouter = express.Router()
const Exterior = require("../models/exterior.js")

exteriorRouter.get("/", (req, res, next) => {
    Exterior.find( (err, jobs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})
module.exports = exteriorRouter