const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")

app.use(express.urlencoded({ extended : true})) //to handle form submissions

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res)=>{
    res.render("index",{title : "home page"})
})

const userData = {
    name : "bivin",
    age : 30,
    city : "Kerala"
}

app.get("/profile",(req,res)=>{
    res.render("profile",{title : "Profile Page",userData})
})


app.get("/contactUS",(req,res)=>{
    res.render("contactUS",{title : "Contact Page"})
})


app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",(req,res)=>{
    //Destructure form data
    console.log(req.body)

    const { name , age, city } = req.body
    
    if(!name || !age || !city){
        return res.status(400).send("Missing required fields")
    }
    console.log(`Name : ${name},Age : ${age} , City : ${city}`)
    res.send(`Form Submitted : Received Data : Name : ${name},Age : ${age}, City : ${city}`)
})

app.listen(3009,()=>{
    console.log('Server listening at port 3009')
})


