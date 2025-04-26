import express from "express";
import mongoose from "mongoose";
import bodyParser from "express"
import userRouter from './routes/user.js'
import contactRouter from './Routes/contact.js'
import { config } from "dotenv";

const app = express();

app.use(bodyParser.json())

//.env setup
config({path:'.env'})

//user Routes

app.use('/api/user', userRouter );

//contact Router
app.use('/api/contact',contactRouter)

//home route
app.get('/', (req,res)=>{
    res.json({message:'this is home route'})
})


mongoose.connect(process.env.MONGO_URI,
   {
        dbName:"nodejs_mastery_course"
    }
   
).then(()=>console.log("mongodb connected..!")).catch((err)=>console.log(err))


const port = process.env.PORT;
app.listen(port,()=>console.log(`server is running on port ${port}`))
