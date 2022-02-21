const mongoose = require("mongoose")


const commentSchema = new mongoose.Schema({
    body :  {type: String, required: true},

}, {
    versionKey : false,
    timestamps : true
})


module.exports = mongoose.model("commnet" , commentSchema)