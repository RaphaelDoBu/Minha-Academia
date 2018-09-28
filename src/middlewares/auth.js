const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = (req, res, next) =>{

    if (!req.cookies.access_token) {
        return res.status(401).json({ error: 'UNAUTHORIZED, TOKEN IS EMPTY' });
      }
      const token = req.cookies.access_token;
      jwt.verify(token, authConfig.secret , (error, userData) => {
        if (error) return res.status(422).json({ error });

        req.userId = userData.id;
        next();
    });

}