
process.env.NODE_ENV = 'test';

var should          = require('should');
//var assert          = require('assert');
var request         = require('supertest');
var server          = require('../service');
var config          = require('../config/config');

server.setExpressApp();
server.setRoutes();

describe('Default REST endpoints', function() {
  it('Root path should return 200 ok', function(done) {
    request(server.express).get('/').end(function(err, res) {
      should.not.exist(err);
      res.status.should.be.eql(200);
      done();
    });
  });
});
