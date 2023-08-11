import express from "express";
import User from "./mongo.js";
import cors from 'cors';
const port=8000;

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//routes
app.get('/',()=>{
console.log("login get");
})

//register route
app.post('/register',async (req,res)=>{
const {userMail,userPassword}=req.body;
const data={
    email:userMail,
    password:userPassword
}
try{
const check=await User.findOne({email:userMail});

if(check){
    res.json('exist');
}else{
    await User.insertMany([data]);
    res.json('notexist');
}

}catch(err){
res.json("fail: "+err);
}


})

//login route
app.post("/",async(req,res)=>{
    const {userMail,userPassword}=req.body;
 

try{
   const check1= await User.findOne({email:userMail});
    
         if(!check1){
            res.json("notexist");
            console.log("user dont exist");
            
        }
        else if(check1){
          const check=  await User.findOne({password:userPassword});

          if(check){
            res.json('exist');
            console.log("user exist");
          }
          else{
            res.json('notexist');
            console.log("incorrect password");
          }
        }

 



}catch(err){
    res.status(500).json("fail: " + err);
}

})



app.listen(`${port}`,()=>{
console.log(`express server started at ${port}`);
})


