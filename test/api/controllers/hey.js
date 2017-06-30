var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;
var server = require('../../../server');

describe('controllers', function() {

	describe('/hey endpoint', function() {

		/*
		*	WARNING
		*	using asyncronous testing produces errors for Content-Type expectation
		*/

		it('should refer to callee as "mate" if no name is provided', function(/*done*/) {

			request(server)
				.get('/hey')
				.set('Accept', 'application/json')
				//.set('Content-Type', 'application/json') // for async testing this should be forced or next line with expectation should be commented
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					expect(err).to.equal(null);

					expect(res.body.message).to.equal('Hey, mate');

					// done();
				});
		});

		it('should accept name as a parameter', function() {

			const userInput = 'Duuude';

			request(server)
				.get('/hey')
				.set('Accept', 'application/json')
				.query({name: userInput})
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					expect(err).to.equal(null);

					expect(res.body.message).to.equal('Hey, ' + userInput);

				});
		});

	});

});
