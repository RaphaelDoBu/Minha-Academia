const Academia = require('../academia/academia');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

exports.loginUser = async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await Academia.findOne({username});

    if(!user){
        return res.status(400).send({error: 'Academia não cadastrada'});
    }

    if(!await bcrypt.compareSync(password, user.password)){
        console.log(password)
        console.log( user.password)
        return res.status(400).send({error: 'Senha invalida'});
    }

    jwt.sign({id: user.id}, authConfig.secret , { expiresIn: '2h' }, (error, TOKEN) => {
        if (error) return res.status(500).json({ error: 'ERROR SIGNING THE TOKEN' });
        res.cookie('access_token', TOKEN, {
          maxAge: new Date(Date.now() + 1000000),
          httpOnly: false,
        });
        return res.status(200).json({ message: 'User logged with success' });
    });
}

  
exports.logOutUser = (req, res, next) => {
    res.clearCookie('access_token', req.cookies.access_token, {
      maxAge: new Date(Date.now() + 10000000),
      httpOnly: false,
    });
    return res.status(200).json({ message: 'Cookie deleted' });
};