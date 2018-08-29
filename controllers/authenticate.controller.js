const Academia = require('../model/academia');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

exports.autentica = async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await Academia.findOne({username});

    if(!user){
        return res.status(400).send({error: 'Academia não cadastrada'});
    }

    if(!await bcrypt.compareSync(password, user.password)){
        console.log(password);
        console.log(user.password)
        return res.status(400).send({error: 'Senha invalida'});
    }

    const token = jwt.sign({id: user.id}, authConfig.secret, {
        //tempo para expirar o token
        expiresIn: 86400,
    });

    res.send({user, token});


}