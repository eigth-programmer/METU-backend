const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_S_KEY);
const router = express.Router();

router.post("/", (req,res)=> {
    const {product, token} = req.body;
    const iKey = "...";

    stripe.customers.create({
        email: token.email,
        source: token.id,
    }).then(customer => {
        stripe.charges.create({
            // @TODO repasar cual será la unidad de pago
            amount: product.price,
            currency: 'eur',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, {iKey})
    })

});

module.exports = router;