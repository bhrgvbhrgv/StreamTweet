import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDB();

import express from "express";
const app = express();

// connecting mongoose with database,using trycatch or promises
(async ()=>{
    
    try{
        
        await mongoose.connect(`${process.env.URL}/${DB_NAME}`)
        app.on('error', (err) => {
            console.error("Error connecting to MongoDB:", err);
            throw err; // Re-throw the error to handle it in the calling code
        
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);   
        
        });

    }catch(error){

        console.error("Error connecting to MongoDB:", error);
        throw error; // Re-throw the error to handle it in the calling code
    
    }
})
