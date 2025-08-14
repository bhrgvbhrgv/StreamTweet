import multer from "multer";

//console.log("Multer middleware loaded");

const storage =  multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname) // Use the original file name
   }
})

//console.log("Multer storage configured");

export const upload = multer({ storage, })
