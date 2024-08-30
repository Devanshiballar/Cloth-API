// const multer = require("multer")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random())
//       cb(null, `${uniqueSuffix}-${file.originalname}`)
//     }
//   })
  
//   const upload = multer({ storage: storage })
//   module.exports=upload;
// const multer = require('multer');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "profile") {
            cb(null, './uploads/profile')
        }
        if (file.fieldname === "image") {
          cb(null, './uploads/cloth')
      }
    },
    filename: (req, file, cb) => {
        if (file.fieldname==="profile"){
            cb(null,file.fieldname+Date.now()+path.extname(file.originalname));
        }
        if (file.fieldname==="image"){
          cb(null,file.fieldname+Date.now()+path.extname(file.originalname));
      }
    }
});
const upload = multer({
  storage,
  limits:{
      fileSize: 1024*1024*10
  },
  fileFilter:(req,file,cb)=>{
      checkFileType(file,cb)
  }
})
function checkFileType(file, cb){
  if(file.fieldname === "profile" || file.fieldname === "image"){
      if (
          file.mimetype === 'image/png' ||
          file.mimetype === 'image/jpg' ||
          file.mimetype === 'image/jpeg'||
          file.mimetype==='image/svg'
        ) { 
          cb(null, true);
        } else {
          cb(null, false); 
        }
  }
}

module.exports = upload;
