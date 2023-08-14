import express from "express";
import User from "./mongo.js";
import cors from 'cors';
import  jwt from "jsonwebtoken";
const port=8000;

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const secretKey='mysecretkeyismadarauchiha';

//routes
app.get('/',()=>{
console.log("login get");
})

//register route
app.post('/register',async (req,res)=>{
const {userMail,hashedPassword}=req.body;
const data={
    email:userMail,
    password:hashedPassword
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
          const hashCheck=bcrypt.compare(userPassword,password)
          const check=  await User.findOne({password:userPassword});

          if(check){
            res.json('exist');
            console.log("user exist");

const token=jwt.sign(
{
  email:userMail,
  password:userPassword,
}
,secretKey);

localStorage.setItem('token',token);
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


