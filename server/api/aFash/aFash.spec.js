'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/aFash', function() {
  this.timeout(10000);
  it('should respond with JSON array of aFashes, populated', function(done) {
    request(app)
      .get('/api/aFash')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
            return done(err);
        }
        res.body.should.be.instanceof(Array);
        done();
      });
  });

});
