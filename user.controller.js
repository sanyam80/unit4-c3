const express = require("express");
const User = require("../models/user.model.js")
const app = express.Router();

app.get("",async(req,res)=>{
    const user = await User.find().lean().exec()
    return res.send({"users":user})

})

app.post("",async(req,res)=>{
    try{
        const user = await User.create(req.body);
        return res.send(user)
    }
    catch{
        return res.send("someting went wrong")
    }
})

module.exports = app;