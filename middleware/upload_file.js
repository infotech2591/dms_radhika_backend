const path=require("path")
const multer=require("multer")

var storages=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,('./public/uploads/'))
    },
        filename:function(req,file,cb){
            let ext=path.extname(file.originalname)
            req.address=Date.now()+ext;

            cb(null,Date.now()+ext)

        }
})
var upload =multer({ storage: storages }).array("file", 10);


module.exports=upload