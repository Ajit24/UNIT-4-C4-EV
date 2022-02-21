const express = require("express")

const router = express.Router()
const commnet = require("../models/comment.model")

router.post("/", async(req, res) => {
    try{

        const comment = await commnet.create(req.body)
        return res.status(201).send(shows)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})


router.get("/", async(req, res) => {
    try{

        const comment = await commnet.find({comment : req.query.comment})

        return res.status(201).json({comment})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/nearest", async(req, res) => {
    try{

        const comment = await commnet.find({post : req.query.post})

        return res.status(201).json({shows})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})





module.exports = router