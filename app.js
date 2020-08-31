const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8181;
const app = express();
app.use(bodyParser.json());

//Routes
app.use('/', require('./src/routes/index'));
app.use('/users', require('./src/routes/user-route'));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})