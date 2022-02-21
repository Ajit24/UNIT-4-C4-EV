const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    body :  {type: String, required: true},
    likes :  [{type: String, required: true}],
    img :  {type: String, required: true}

}, {
    versionKey : false,
    timestamps : true
})


module.exports = mongoose.model("post" , postSchema)