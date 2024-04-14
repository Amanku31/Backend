import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async()=>{
    try {

      const connnectionInstance = await mongoose.connect(`${process.env.MOGODB_URI}/{DB_NAME}`)
      console.log(`Mongodb connected!!DB host:${connnectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("Error:",error);
        process.exit(1);
    }
}

export default connectDB;