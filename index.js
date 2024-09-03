
require("dotenv").config()
const cors=require("cors")

const express=require("express")
const path=require("path")



// CORS options
const corsOptions = {
    origin: '*', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Enable CORS for cookies or authentication
  };

const PORT=process.env.PORT || 3000

const app=express()

app.use(cors(corsOptions))
const template=path.join(__dirname,"index.html")
const template2=path.join(__dirname,"aboutus.html")
const style=path.join(__dirname,"style.css")


app.get("/",(req,res)=>{
    res.sendFile(template)
    res.sendFile(style)
})

app.get("/about",(req,res)=>{
    res.sendFile(template2)
})



app.listen(PORT,()=>{

    console.log("Server Started at port number ",PORT)

})





