const express=require('express');

const app=express();


const { adminRouter }= require("./routes/admin");
const { userRouter }= require("./routes/user");
const { courseRouter }= require("./routes/course")




app.use(express.static(__dirname + "/frontend"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/index.html")
})

app.listen(3000);