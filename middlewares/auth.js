const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) =>{
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