import { asyncHandler } from "../utils/asyncHandler.js";
console.log("here user controller");
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message:"ok",
    })
    return
});



export { registerUser };