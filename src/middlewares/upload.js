const multer = require("multer")

const path = require("path")
// --------------store data ---------- with path-------
const storage = multer.diskStorage({
    destination : function(req, file, callback) {
        callback(null, path.join(__dirname, "../uploads"))
    },
    filename : function(req, file, callback) {
        const uniquePrefix = Date.now() + "-" +  Math.round(Math.random() * 1e9)
        callback(null, uniquePrefix + "-" + file.originalname)
    }
})
 // -------- file filetre function --------
const fileFilter = function(req, file, callback) {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null ,true)
    }else {
        callback(null, false)
    }
}
// ------------ export the file ----------
module.exports = multer({
    storage, fileFilter,
    limits : {
        fileSize : 1024 * 1024 * 15
    }
})