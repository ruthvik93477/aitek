const express = require('express')
const mongoose = require('mongoose')
const fs = require("fs")
const app = express()
const port = 3000

const User = require("./model/user")

app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://ruthvik:ruthvik@cluster1.onhko9g.mongodb.net/ecom").then(()=>{
    console.log("database connected")
}).catch((e)=>{
    console.log(e)
    console.log('database not connected')
})

app.post("/",async(req,res)=>{
    const userData = new User(req.body)
    await userData.save()
    let a = fs.readFileSync("submit.html")
    res.send(a.toString())
})


app.get("/",(req,res)=>{
    let a = fs.readFileSync("inputForm.html")
    res.send(a.toString())
})
app.listen(port,()=>{
    console.log("app running on port:",port)
})