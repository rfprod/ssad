'use strict';
/*
*	'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
*	external modules defined in package.json in the project root
*/
const util = require('util');

/*
*	helpers
*/
const jwtMethods = require('../helpers/jwt-methods');

/*
*	method(s) this module exports
*/
module.exports = {
	login: login
};

/*
*	existing user credentials
*/
const userData = {
	user1: 'password1',
	user2: 'password2'
};

/*
*	Param 1: a handle to the request object
*	Param 2: a handle to the response object
*/
function login(req, res) {
	// variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
	const login = req.body.login || null;
	const password = req.body.password || null;	
	let msg;
	if (!login || !password) {
		msg = 'Missing mandatory request parameters';
		res.status(400);
	} else {
		if (!userData.hasOwnProperty(login)) {
			msg = 'User does not exist';
			res.status(401);
		} else if (userData[login] !== password) {
			msg = 'Wrong password';
			res.status(401);
		} else {
			let expirationDate = new Date();
			expirationDate.setDate(expirationDate.getDate() + 7);
			const payload = {
				login: login,
				expires: expirationDate.getTime() // expires in one week unless revoked
			};
			const tokenObject = jwtMethods.generateJWToken(payload);
			msg = util.format('%s', tokenObject.token);
			res.status(200);
		}
	}
	res.json({message: msg});
}
