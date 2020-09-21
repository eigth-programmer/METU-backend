const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const multer = require('multer');
const {ProductController} = require('../entities/product/infraestructure/product-controller');

const router = express.Router();
const controller = new ProductController();

const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, '../assets/product-pics');
    },
    filename: function (req, file, callback){
        callback(null, new Date().toISOString() + file.originalname);
    }
});
const upload = multer({storage: storage});

router.post("/",
    upload.single('image'),
    (req, res) => {

    controller.create({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        description: req.body.description,
        images: [],
        categories: req.body.categories,
        taxes: req.body.taxes,
        features: req.body.features,
        discounts: req.body.discounts,
        stock: req.body.stock
    }).then(product => {
        return res.status(200).json({product: product});
    }).catch(err => {
        return res.status(500).json({msg:'Could not register product', error: err})
    })
});

router.put("/:id",
    upload.single('image'),
    (req, res)=> {

    controller.update({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        description: req.body.description,
        images: [],
        categories: req.body.categories,
        taxes: req.body.taxes,
        features: req.body.features,
        discounts: req.body.discounts,
        stock: req.body.stock
    }).then(product => {
        return res.status(200).json({product: product});
    }).catch(err => {
        return res.status(500).json({msg:'Could not update product', error: err});
    })
});

router.delete("/:id", (req, res) =>{

    controller.delete(req.params.id)
        .then(() => {
            return res.status(200).json({msg:'Success'})
        }).catch(err => {
            return res.status(500).json({msg:'Could not delete review', error: err})
        });
})

router.get("/:id", (req, res)=>{

    controller.get(req.params.id)
        .then(product => {
            return res.status(200).json({product: product});
        }).catch(err => {
            return res.status(500).json({msg:'Could not retrieve product', error: err});
        })
});

router.get("/", (req, res)=>{
    const params = {};
    controller.getList(params).then(products => {
        if(products.length === 0) return res.status(200).json({msg: 'No results where found'})
        return res.status(200).json({products: products, length: products.length});
    }).catch(err => {
        return res.status(500).json({msg:'Could not retrieve list', err: err})
    })
});

module.exports = router;