const path = require("path");
const multer = require('multer');




let Storage = multer.diskStorage({

    // destination:'./public/uploads',

    destination: function (req, file, cb) {
        switch (file.fieldname) {
            case "property_images" :
                cb(null, "./public/images/")
                break;
            default:
                cb(null, "./public/")
        }
    }, filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));

    },
});



exports.upload = multer({

    storage: Storage

})



