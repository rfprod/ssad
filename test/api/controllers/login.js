var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;
var server = require('../../../server');

describe('controllers', function() {

	describe('/login endpoint', function() {

		/*
		*	WARNING
		*	using asyncronous testing produces errors for Content-Type expectation
		*/

		it('should return error if no login and password is provided', function(/*done*/) {

			request(server)
				.post('/login')
				.set('Accept', 'application/json')
				//.set('Content-Type', 'application/json') // for async testing this should be forced or next line with expectation should be commented
				.expect('Content-Type', /json/)
				.expect(400)
				.end(function(err, res) {
					expect(err).to.equal(null);

					expect(res.body.message).to.equal('Missing mandatory request parameters');

					// done();
				});
		});

		it('should return error if no login is provided', function() {

			request(server)
				.post('/login')
				.set('Accept', 'application/json')
				.send({password: 'password1'})
				.expect('Content-Type', /json/)
				.expect(400)
				.end(function(err, res) {
					expect(err).to.equal(null);

					expect(res.body.message).to.equal('Missing mandatory request parameters');

				});
		});

		it('should return error if no password is provided', function() {

			request(server)
				.post('/login')
				.set('Accept', 'application/json')
				.send({login: 'user1'})
				.expect('Content-Type', /json/)
				.expect(400)
				.end(function(err, res) {
					expect(err).to.equal(null);

					expect(res.body.message).to.equal('Missing mandatory request parameters');

				});
		});

		it('should return error if provided login does not exist', function() {

			request(server)
				.post('/login')
				.set('Accept', 'application/json')
				.send({login: 'user3', password: 'password3'})
				.expect('Content-Type', /json/)
				.expect(401)
				.end(function(err, res) {
					expect(err).to.equal(null);

					expect(res.body.message).to.equal('User does not exist');

				});
		});

		it('should return error if provided password does not match provided login', function() {

			request(server)
				.post('/login')
				.set('Accept', 'application/json')
				.send({login: 'user1', password: 'password2'})
				.expect('Content-Type', /json/)
				.expect(401)
				.end(function(err, res) {
					expect(err).to.equal(null);

					expect(res.body.message).to.equal('Wrong password');

				});
		});

		it('should accept return token if provide login exists and provided password matches it', function() {

			request(server)
				.post('/login')
				.set('Accept', 'application/json')
				.send({login: 'user1', password: 'password1'})
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					expect(err).to.equal(null);

					expect(res.body.message).to.match(/\w\.\w\.\w/);

				});
		});

	});

});
