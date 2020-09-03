const jwt = require('jsonwebtoken');

/** Function responsible fro checking authentication **/
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        next();
    } catch (err) {
        return res.status(401).json({msg: 'Auth failed'})
    }
    next();
}