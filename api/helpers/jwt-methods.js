'use strict';
/*
*	'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
*	external modules defined in package.json in the project root
*/
const jwt = require('jwt-simple'),
crypto = require('crypto');

/*
*	method(s) this module exports
*/
module.exports = {
	generateJWToken: generateJWToken,
	decryptJWToken: decryptJWToken
};

function generateJWToken(payload) {
	const salt = crypto.randomBytes(24).toString('hex');
	const token = jwt.encode(payload, salt, 'HS256'); // HS256, HS384, HS512, RS256.
	return { token: token, salt: salt };
}

function decryptJWToken(token, storedSalt) {
	if (!token || !storedSalt) return false;
	return jwt.decode(token, storedSalt, 'HS256'); // HS256, HS384, HS512, RS256.
}
