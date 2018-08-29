const Academia = require('../model/academia');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function genereteToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

exports.autentica = async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await Academia.findOne({username});

    if(!user){
        return res.status(400).send({error: 'Academia não cadastrada'});
    }

    if(!await bcrypt.compareSync(password, user.password)){
        return res.status(400).send({error: 'Senha invalida'});
    }

    res.send({user, token: genereteToken ({id: user.id})});


}