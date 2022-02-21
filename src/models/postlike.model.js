const mongoose = require("mongoose")

const postlikeSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "post",
        required: true
    }
}, {
    versionKey : false,
    timestamps : true
})



