import mongoose from "mongoose";
const uri='mongodb+srv://sharmashashwat634:itachi123@cluster0.hnvg7ev.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri)
.then(()=>{
    console.log('mongodb connected')
})
.catch((err)=>{
    console.log(`error occured: ${err}`)
})

const UserSchema=new mongoose.Schema({
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
}

});

const User=new mongoose.model("user",UserSchema);

export default User