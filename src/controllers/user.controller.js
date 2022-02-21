require("dotenv").config()
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const router = require("./post.controller")


router.post("", 
            body("first_name").isString().isLength({min:3, max:30}),
            body("last_name").isString().isLength({min:3, max:30}),
            body("age").isNumeric({min:0, max:150}),
            async(req, req) =>{
                try{
                const user = await user.create(req.body)
                return res.status(202).send(user)
            }catch(e){
                return res.status(505).send({Error: e.message})
            }
        })

        router.get("", async(req, res) =>{
            try{
              const user = await user.find().lean().exec()
              return res.status(202).send(user)
            }catch(e){
                return res.status(505).send({Error: e.message})
            }
        })


        


const newToken = (user) => {
    return jwt.sign({user: user}, process.env.JWT_SECRET_KEY)
}

// ----------register the user ---------

const register = async(req, res) => {
    try {

        let user = await User.findOne({email : req.body.email})
        if(user) {
            return res.status(400).json({status :"failed", message : "Please Provide Different email"})
        }

        user = await User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            age : req.body.age,
            email : req.body.email,
            profile_photo_url: req.file.path,
        })

        const token = newToken(user)
        return res.status(201).send({user, token})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
}
//-------------login the user -----------



const login = async(req, res) => {
    try{

        let user = await User.findOne({email : req.body.email})
        if(!user) {
            return res.status(400).json({status :"failed", message : "Please Provide valid email"})
        }

        const match = await user.checkPassword(req.body.password)

        if(!match) {
            return res.status(400).json({status :"failed", message : "Please Provide valid email and password"})
        }

        const token = newToken(user)
        return res.status(201).json({user, token})



    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
}

module.exports = {
    router,
    register, 
    login
}