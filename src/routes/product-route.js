const express = require('express');
const auth = require('../middelware/security/auth');
const ProductController= require('../entities/product/infraestructure/product-controller');

const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './pictures/product-pics');
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

router.post("/", upload.array('images', 5), ProductController.create);
router.put("/:id", upload.array('images', 5), ProductController.update);
router.get("/:id", ProductController.get);
router.get("/", ProductController.getList);
router.delete("/:id", ProductController.remove);

module.exports = router;
