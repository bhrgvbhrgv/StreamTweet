import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {User} from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponce.js";

console.log("here user controller");
const registerUser = asyncHandler(async (req, res) => {

//get user details from front end

const {fullName,email,username,password } =req.body
console.log(email," - email");
console.log(password," - password")

//vailidation not empty

if(
    [fullName,email,username,password].some((field)=>field?.trim()==="")
){throw new ApiError(400,"All fields are required")}
//check email format
if (!email.includes("@")) {
    throw new ApiError(400, "Email must contain '@'");
}

//check if user already exists

const existedUser = User.findOne({
    $or: [{email},{username}]
})
if(existedUser){
    throw new ApiError(409,"user already exists with this email or username")
}


//check if images

const avatarLocalPath = req.files?.avatar[0]?.path;
const coverImageLocalPath=req.files?.coverImage[0]?.path;
//check if images are provided
if(!avatarLocalPath ){
    throw new ApiError(400,"Avatar required")
}
if(!coverImageLocalPath){
    throw new ApiError(400,"cover image required")
}


//upload image to cloudinary

const avatar = await uploadOnCloudinary(avatarLocalPath)
const coverImage = await uploadOnCloudinary(coverImageLocalPath);
if(!avatar || !coverImage){
    throw new ApiError(500,"Error uploading images to cloudinary")
}

//create user objext , create user in database

const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url||"",
    email,
    password,
    username:username.toLoverCase(),
})

//remove password and refresh tocken field from responce

const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
)

//check resopnce if user created

if(!createdUser){
    throw new ApiError(500,"Error creating user")
}

// send response to front end

return res.status(201).json(
    new ApiResponse(201, createdUser, "User registered successfully")
);

});



export { registerUser };