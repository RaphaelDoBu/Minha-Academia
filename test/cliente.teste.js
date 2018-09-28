const request = require('supertest');
const app = require('../app');


//==================== cliente API test ====================
// É preciso estar logado com a academia para poder rodar os testes

/**
 * Teste para obter todas os clientes de academia logada
 */
describe('GET /cliente', function () {
  it('responder com json contendo uma lista de todas os clientes da academia logada', function (done) {
      request(app)
          .get('/cliente')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

/**
* Teste para obter um clientes de academia logada
*/
describe('GET /cliente/:id', function () {
  it('responder com json contendo um cliente de uma academia logada', function (done) {
      request(app)
          .get('/cliente/5b987e0050758f4cc54c2619')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

/**
* Teste para obter um erro de não encontrar id de um cliente
*/
describe('GET /cliente/:id', function () {
  it('responder com o usuário json não encontrado', function (done) {
      request(app)
          .get('/cliente/12')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404) //expecting HTTP status code
          .expect('{"message":"Não existe cliente com id 12"}') // expecting content value
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});

/**
* Teste de um cadastro de um cliente
*/
describe('POST /cliente', function () {
  let cliente = {
      "nome": "Fulano",
      "endereco": "rua local",
      "cpf": "656566532",
      "peso": "60kg",
      "dataNascimento": "15/09/1990",
      "foco": "hipertrofia"
  }
  it('respond with 200 created', function (done) {
      request(app)
          .post('/cliente')
          .send(cliente)
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
* Teste de um cliente com erro
*/
describe('POST /cliente', function () {
  let cliente = {
    "endereco": "rua local",
    "cpf": "656566532",
    "peso": "60kg",
    "dataNascimento": "15/09/1990",
    "foco": "hipertrofia"
  }
  it('respond with 400 not created', function (done) {
      request(app)
          .post('/cliente')
          .send(cliente)
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