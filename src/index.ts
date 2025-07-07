import express from "express";
import mongoose from "mongoose";
import { Request, Response } from "express";

const app=express();
mongoose.connect("mongodb+srv://sarkar:<200232@12>@cluster0.dbbmdub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Course-Selling-App");



app.post("/api/v1/signup",(req: Request, res: Response)=>{
        const username=req.body.username;
})