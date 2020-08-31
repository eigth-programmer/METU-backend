const express = require('express');
const bodyParser = require('body-parser');

const port = 8181;
const app = express();
const router = express.Router();
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})