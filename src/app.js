import express from 'express';
import dotenv from 'dotenv';
import  cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true    
})); // Enable CORS with credentials


app.use(express.json({
    limit:"16kb"
})); // Parse JSON bodies with a limit of 16kb


app.use(express.urlencoded({
    extended: true, limit: "16kb"
})); // Parse URL-encoded bodies with a limit of 16kb (when url are sent in the request body and its not in usual format)

app.use(express.static('public')); // Serve static files from the 'public' directory like favcon.ico, images, etc. public usage

app.use(cookieParser()); // Parse cookies from the request headers



export default app;