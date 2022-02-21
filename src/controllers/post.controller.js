
const express = require("express")

const router = express.Router()

const post = require("../models/post.model")
const upload = require("../middlewares/upload")

router.post("/", upload.single("post_url"),async(req, res) => {
    try {

        const post = await post.create({
            body : req.body.body,
            likes : req.body.likes,
            img: req.body.img,
            post_url : req.file.path
        })

        return res.status(201).send({post})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/", async(req, res) => {
    try{

        const post = await post.find({img: req.query.img})
        return res.status(201).send({post})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.delete("/:id" , async (req, res) => {
    try{
        const fin = await User.findById(req.params.id)
        unlink.unlinkSync(fin.profile_photo_url)
        
        const user = await User.findByIdAndDelete(req.params.id)

        return res.status(201).json({user})

    }catch(e) {
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})



module.exports = router