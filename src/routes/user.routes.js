// import {Router} from "express";
// import { registerUser } from '../controllers/user.controller.js';

// const router = Router();

// router.route('/register').post(registerUser);


// export default router;

// filepath: c:\Users\DELL\Desktop\youtubeV1\src\routes\user.routes.js


import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1,
        },
        {
            name:"coverImage",
            maxCount: 1,
        }
    ]),    
    registerUser
);

export default router;