const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/db/mongoose/moongose-connection');
const dotenv = require('dotenv');

//Load Config
dotenv.config({path: './src/config/.env'});

const PORT = process.env.PORT || 8181;
const app = express();

app.use(bodyParser.json());
app.use(express.static('./assets/product-pics'));

//DB connection
connectDB()

//Routes
app.use('/', require('./src/routes/index'));
app.use('/users', require('./src/routes/user-route'));
app.use('/products', require('./src/routes/product-route'));

app.listen(PORT, () => {
    console.log(`Metu app listening at http://localhost:${PORT}`)
})