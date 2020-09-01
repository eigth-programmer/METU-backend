const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8181;
const app = express();
app.use(bodyParser.json());
app.use(express.static('./assets/product-pics'));

//Routes
app.use('/', require('./src/routes/index'));
app.use('/users', require('./src/routes/user-route'));
app.use('/products', require('./src/routes/product-route'));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})