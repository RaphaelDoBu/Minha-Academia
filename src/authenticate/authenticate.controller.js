const Academia = require('../academia/academia');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

exports.loginUser = async function(req, res) {
    const username = req.body.userData.username;
    const password = req.body.userData.password;

    const user = await Academia.findOne({username});

    if(!await bcrypt.compareSync(password, user.password)){
        return res.status(400).send({error: 'Senha invalida'});
    }
    const token = jwt.sign({id: user.id}, authConfig.secret, {
        //tempo para expirar o token
        expiresIn: 86400,
    });
    res.json({user, token, message: 'User logged with success'});
}

  
exports.logOutUser = (req, res, next) => {
    if(req.headers.authorization){
        req.headers.authorization = '';
        token = ''
        res.status(200).json({ message: 'Token deleted' })
    }
    return res.status(400).json({ message: 'Não existe token' });
};