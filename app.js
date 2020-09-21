const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/db/mongoose/moongose-connection');

//Load Config
dotenv.config({path: './src/config/.env'});

const PORT = process.env.PORT || 8181;
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./assets/product-pics'));

//DB connection
connectDB();

//Routes
app.use('/', require('./src/routes/index'));
app.use('/users', require('./src/routes/user-route'));
app.use('/products', require('./src/routes/product-route'));
app.use('/payments', require('./src/routes/payment-route'));
app.use('/units', require('./src/routes/unit-route'));
app.use('/taxes', require('./src/routes/tax-route'));
app.use('/features', require('./src/routes/feature-route'));
app.use('/categories', require('./src/routes/category-route'));
app.use('/street-types', require('./src/routes/streetType-route'));
app.use('/reviews', require('./src/routes/review-route'));
app.use('/addresses',require('./src/routes/address-route'));
app.use('/orders',require('./src/routes/order-route'));
app.use('/discounts', require('./src/routes/discount-route'));
app.use('/order-states', require('./src/routes/order-state-route'));

app.listen(PORT, () => {
    console.log(`Metu app listening at http://localhost:${PORT}`)
})