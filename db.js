import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: './config.env' });
const connectToMongo = async(dburl)=>{
    await mongoose.connect(dburl)   
    .then(()=>{
        console.log("SocialMedia database is active!!!")
    })
    .catch((err)=>{ 
        console.log(`Error is occurred!!`); 
        console.log(err);
    })
}

export default connectToMongo ;