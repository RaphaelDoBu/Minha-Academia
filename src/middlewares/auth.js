const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');
const Academia = require('../../src/academia/academia')

exports.authenticate = (req, res, next) =>{
  console.log(req.headers.authorization)
  const authHeader = req.headers.authorization;
  if(!authHeader){
      return res.status(401).send({error: 'O token não foi informado'});
  }
  const parts = authHeader.split(' ');
  if(!parts.length === 2){
      return res.status(401).send({error: 'Token erro'});
  }
  const[schema, token] = parts;
  if(!/^Bearer$/i.test(schema)){
      return res.status(401).send({error: 'Token malformatado'});
  }
  jwt.verify(token, authConfig.secret, (err, decoded) =>{
      if(err){
          return res.status(401).send({error: 'Token invalido'});
      }
      req.userId = decoded.id;
      return next();
  })
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