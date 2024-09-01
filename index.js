require("dotenv").config()

const express=require("express")
const path=require("path")

const PORT=process.env.PORT || 3000

const app=express()

const template=path.join(__dirname,"index.html")

app.get("/",(req,res)=>{
    res.sendFile(template)
})


app.listen(PORT,()=>{

    console.log("Server Started at port number ",PORT)

})



