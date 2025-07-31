import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    
    try{
        const connectionInstance = await mongoose.connect(`${process.env.URL}/${DB_NAME}`);
        console.log(`/n MongoDB connected !!  DB HOST: ${connectionInstance.connection.host}`);
    }   catch(error){
        console.error("fail Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
}
 
export default connectDB;