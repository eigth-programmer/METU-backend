const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, key);
        next();
    } catch (err) {
        return res.status(401).json({msg: 'Auth failed'})
    }
    next();
}