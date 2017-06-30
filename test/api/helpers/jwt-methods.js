var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;
var jwtMethods = require('../../../api/helpers/jwt-methods');

describe('helpers', function() {

	describe('jwt-methods helper', function() {

		it('should have two methods exported: generateJWToken and decryptJWToken', function(done) {
			expect(jwtMethods.generateJWToken).to.be.a('function');
			expect(jwtMethods.decryptJWToken).to.be.a('function');

			done();
		});

		it('should correctly encrypt and decrypt tokens', function(done) {
			const payload = {
				some: 'data'
			};
			const tokenObject = jwtMethods.generateJWToken(payload);

			const decrypted = jwtMethods.decryptJWToken(tokenObject.token, tokenObject.salt);

			expect(payload).to.deep.equal(decrypted);

			done();
		});

	});

});
