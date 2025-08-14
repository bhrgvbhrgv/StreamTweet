import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';



// Configuration

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET ,
});
    
// const uploadOnCloudinary = async (localFilePath) => {
//     try{
//         if (!localFilePath){ return null
//             const response = await cloudinary.uploader.upload(localFilePath,{resource_type: "auto"})
//         }
//         //file upload to cloudinary
//         console.log("Uploading file to Cloudinary:", response.url);
//         return response;
//     }catch(error){
//         fs.unlinkSync(localFilePath) ; // Delete the local file if upload fails
//         console.error("Error uploading to Cloudinary:", error);
//         return null; // Return null if upload fails
//     }
// }

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) {
//             return null;
//         }
//         // file upload to cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });
//         console.log("Uploading file to Cloudinary:", response.url);
//         return response;
//     } catch (error) {
//         // Only try to delete the file if it exists
//         if (fs.existsSync(localFilePath)) {
//             fs.unlinkSync(localFilePath);
//         }
//         console.error("Error uploading to Cloudinary:", error);
//         return null;
//     }
// }

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }
        // file upload to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });
        console.log("Uploading file to Cloudinary:", response.url);

        // Delete the local file after successful upload
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response;
    } catch (error) {
        // Only try to delete the file if it exists
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        console.error("Error uploading to Cloudinary:", error);
        return null;
    }
}

export { uploadOnCloudinary };