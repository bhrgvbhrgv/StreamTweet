// import {Router} from "express";
// import { registerUser } from '../controllers/user.controller.js';

// const router = Router();

// router.route('/register').post(registerUser);


// export default router;

// filepath: c:\Users\DELL\Desktop\youtubeV1\src\routes\user.routes.js
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

console.log("here")

router.post("/register", registerUser); //CCCCC
router.get("/register", (req,res)=>{
    console.log("GET request to /register endpoint");
    res.status(200).json({
        message: "GET request to /register endpoint"
    });
}); //CCCCC

export default router;