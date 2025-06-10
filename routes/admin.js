const {Router}= require('express');
const adminRouter=Router();


adminRouter.post("/signup",function(req,res){
    const {username,password}=req.body
});


adminRouter.post("/signup",function(req,res){
    
});


adminRouter.post("/course",function(req,res){
    
});


adminRouter.put("/course",function(req,res){
    
});

adminRouter.get("/course/bulk",function(req,res){
    
});

module.exports={
    adminRouter
}