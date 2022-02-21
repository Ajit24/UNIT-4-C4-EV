
const express = require("express")

const app = express()

app.use(express.json())

const {register ,login} = require("./controllers/user.controller")

const userController = require("./controllers/user.controller")

const postController = require("./controllers/post.controller")

const commentController = require("./controllers/comment.controller")

app.post("/user/register", upload.single("profile_photo_url"), register)
app.post("/user/login" , login)

app.use("/user", userController)

app.use("/post", postController)

app.use("/commnet", commentController)

const upload = require("./middlewares/upload")


odule.exports = app

