import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes';
import blogrouter from './routes/blogs-routes';
const app = express();
app.use(express.json())
app.use("/api/user",router) 
app.use("/api/blog",blogrouter)
mongoose.connect(mongodb+srv//krishna:krishna123@cluster0.lbbgn.mongodb.net/
).then (()=>app.listen(5000)).then(()=>{
    console.log("connected to database and  listed to database")
}).catch((err)=>console.log(err))
