const config = require("../config.js");
const jwt = require("jsonwebtoken");

module.exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {return res.status(401).send('No token provided');}

    jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        req.id = user.id;
        next();
    })
}