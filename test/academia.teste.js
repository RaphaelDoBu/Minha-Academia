const express = require('express');
const request = require('supertest');
const app = require('../app');


describe('Todos list API Integration Tests', function() {
    describe('GET /academia', function() { 
        it('deve receber todas as academias', function(done) { 
          request(app)
            .get('/academia')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
          
        });
      });
});