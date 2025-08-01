import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

import { v2 as cloudinary } from 'cloudinary';


// Configuration

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET ,
});
    
const uploadOnCloudinary = async (localFilePath) => {
    try{
        if (!localFilePath){ return null
            const response = await cloudinary.uploader.upload(localFilePath,{resource_type: "auto"})
        }
        //file upload to cloudinary
        console.log("Uploading file to Cloudinary:", response.url);
        return response
    }catch(error){
        fs.unlinkSync(localFilePath) ; // Delete the local file if upload fails
        console.error("Error uploading to Cloudinary:", error);
        return null; // Return null if upload fails
    }
}

export { uploadOnCloudinary };