
const {Schema,model} = require("mongoose")

//------------user-model------------------

const userSchema = new Schema({
    first_name : {type: String, required: true, minlength:3,  maxlength:30},
    last_name : {type: String, required: true,minlength:3, maxlength:30},
    age: {type: String, required : true},
    email : {type : String , required :  true},
    profile_photo_url:[{type:String,required:true}],
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "user",
        required: true
    }
    
},{
    timestamps:true,
    versionKey:false,
})


userSchema.pre("save" , function(next) {
    if(!this.isModified("password")) {return next()}
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash
    return next()
})

userSchema.methods.checkPassword = function(password) {
    
    return new Promise((resolve, reject) => {
            bcrypt.compare(password, this.password, function(err, same) {
            if(err) {return reject(err)}
            return resolve(same)
        })
    })
}




module.exports= model("user",userSchema)