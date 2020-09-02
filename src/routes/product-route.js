const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, '../assets/product-pics');
    },
    filename: function (req, file, callback){
        callback(null, new Date().toISOString() + file.originalname);
    }
})
const upload = multer({storage: storage});

router.post("/",
    checkAuth,
    roleAuth,
    upload.single('image'),
    (req, res, next) => {

});

module.exports = router;