import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";


dotenv.config({
    path: "./.env"
});

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
})
.catch((error) => {
    console.error("mongo db connection failed:", error);
    return;
});




// connecting mongoose with database,using trycatch or promises
(async ()=>{
    
    try{
        
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
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










app.get("/", (req, res) => {
  res.send("testing server is running");
}); // testing route to check if server is running