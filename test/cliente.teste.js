const express = require('express');
const request = require('supertest');
const app = require('../app');


describe('Todos os clientes do sistema', function() {
    describe('GET /cliente', function() { 
        it('deve receber todos os clientes', function(done) { 
          request(app)
            .get('/cliente')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
          
        });
      });
});