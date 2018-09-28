const request = require('supertest');
const app = require('../app');


//==================== academia API test ====================

/**
 * Teste para obter todas as academias
 */
describe('GET /academia', function () {
  it('responder com json contendo uma lista de todas as academias', function (done) {
      request(app)
          .get('/academia')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

/**
* Teste para obter sucesso ao encontrar academia
*/
describe('GET /academia/:id', function () {
  it('responder com json contendo uma academia', function (done) {
      request(app)
          .get('/academia/5b987e0050758f4cc54c2619')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

/**
* Teste para obter um erro de não encontrar id de uma academia
*/
describe('GET /academia/:id', function () {
  it('responder com o usuário json não encontrado', function (done) {
      request(app)
          .get('/academia/12')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404) //expecting HTTP status code
          .expect('{"message":"Não existe academia com id 12"}') // expecting content value
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});

/**
* Teste de um cadastro de academiai
*/
describe('POST /academia', function () {
  let academia = {
      "id": "1",
      "nome": "Academia Teste",
      "endereco": "rua local",
      "cnpj": "656566532",
      "username": "academiaTeste",
      "password": "123456"
  }
  it('respond with 200 created', function (done) {
      request(app)
          .post('/academia')
          .send(academia)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});

/**
* Teste de uma academia com erro
*/
describe('POST /users', function () {
  let data = {
    "endereco": "rua local",
    "cnpj": "656566532",
    "username": "academiaTeste",
    "password": "123456"
  }
  it('respond with 400 not created', function (done) {
      request(app)
          .post('/academia')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .expect('{"message":"Nome não pode ser vazio!"}')
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});