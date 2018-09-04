var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
var academia = require('./routes/academia.router');
var cliente = require('./routes/cliente.router');
var autenticacao = require('./routes/autenticacao.router');

var swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');


var app = express();

// swagger definition
var swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/',
  };
  
  // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./**/routes/*.js','routes.js'],// pass all in array 
  
    };
  
  // initialize swagger-jsdoc
  var swaggerSpec = swaggerJSDoc(options);

// serve swagger 
app.get('/swagger.json', function(req, res) {   
    res.setHeader('Content-Type', 'application/json');   
    res.send(swaggerSpec);
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/cliente', cliente);
app.use('/academia', academia);
app.use('/auth', autenticacao);

app.get('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;
