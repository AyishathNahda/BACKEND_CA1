const express=require("express");
const app=express();
app.use(express.json());
const PORT=3000;

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    if(!email){
        return res.status(400).json({error:"Email cannot be empty"});
    }else if(!password){
        return res.status(400).json({error:"Password cannot be empty"});
    }else{
        return res.status(200).json({message:"Login successfull!"});
    }

});

app.get("/",(req,res)=>{
    console.log("<h1>Server is running!</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});

