const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', (req, res) =>
    res.send('welcome'));

// Dashboard
//router.get('/dashboard', , (req, res) =>
//    res.send('dashboard')
//);

module.exports = router;