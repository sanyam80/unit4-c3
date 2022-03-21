const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    likes :{type:Number,required:true,default:1},
    coverImage:{type:String,required:true},
    content:{type:String,required:true},
},
{versionKey:false,timestamps:true}
)

module.exports = mongoose.model("book",bookSchema)