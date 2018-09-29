const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');
const Academia = require('../../src/academia/academia')

exports.authenticate = (req, res, next) =>{

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

exports.authorizeByRole = async (req, res, next) => {
    const academiaAutenticada = await Academia.findById(req.userId);
    const reqRole = academiaAutenticada.role;
    if (reqRole) {
      if (reqRole === "ADMIN") {
        next();
      } else {
        res.status(403).send({mensage: "Role Diferente de ADMIN"});
      }
  
    } else {
      res.status(400).send({mensage: "Role não é nem USER nem ADMIN"});
    }
  };