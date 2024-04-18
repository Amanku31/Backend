// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/connect.js";

dotenv.config({
    path:'./env'
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Listening on PORT ${process.env.PORT}`);
        
    })
})

.catch((err)=>{
    console.log('Db connection failed!!',err);
    
})

