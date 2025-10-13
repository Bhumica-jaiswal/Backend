import {v2 as cloudinary} from  'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary= async(localFilePath)=>{
    try {
        if(!localFilePath) return null
const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto" //take any png,jpg etc
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary",response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove locally saved temporary file as uploading failed on server
        return null;
    }
}

export{uploadOnCloudinary}

















// import { v2 as cloudinary } from 'cloudinary';
// import fs from 'fs';

// // Cloudinary configuration
// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         // Check if file path is provided
//         if (!localFilePath) {
//             console.log("No file path provided to uploadOnCloudinary");
//             return null;
//         }

//         console.log("Uploading file to Cloudinary:", localFilePath);

//         // Upload file to cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto" // Automatically detect file type (image, video, etc.)
//         });

//         // File uploaded successfully
//         console.log("File uploaded successfully to Cloudinary!");
//         console.log("Cloudinary URL:", response.url);

//         // Delete local file after successful upload
//         fs.unlinkSync(localFilePath);
//         console.log("Local temp file deleted:", localFilePath);

//         return response;

//     } catch (error) {
//         console.error("Cloudinary upload error:", error.message);
        
//         // Remove local file if upload failed
//         try {
//             if (fs.existsSync(localFilePath)) {
//                 fs.unlinkSync(localFilePath);
//                 console.log("Local temp file deleted after error:", localFilePath);
//             }
//         } catch (unlinkError) {
//             console.error("Error deleting local file:", unlinkError.message);
//         }

//         return null;
//     }
// };

// export { uploadOnCloudinary };

