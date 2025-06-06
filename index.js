const express=require('express');

const app=express();


const { adminRouter }= require("./routes/admin");
const { userRouter }= require("./routes/user");
const { courseRouter }= require("./routes/course")