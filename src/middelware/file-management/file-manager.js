const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './assets/product-pics');
    },
    filename: function (req, file, callback){
        callback(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null, true)
    } else {
        cb(new Error('File extension not supported'), false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

const saveFile = async (req, res, next) => {
    upload.array('images', 5);
}

module.exports = {saveFile: saveFile};
