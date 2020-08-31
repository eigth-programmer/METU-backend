const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) =>
    res.send('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
    res.send('dashboard')
);

module.exports = router;