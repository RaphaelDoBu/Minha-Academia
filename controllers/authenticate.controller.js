var Academia = require('../model/academia');
var bcrypt = require('bcrypt');

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

    res.send({user});


}