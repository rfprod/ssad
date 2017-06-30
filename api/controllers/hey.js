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
*	method(s) this module exports
*/
module.exports = {
	hey: hey
};

/*
*	Param 1: a handle to the request object
*	Param 2: a handle to the response object
*/
function hey(req, res) {
	// variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
	const name = req.query.name || 'mate';
	res.status(200).json({message: util.format('Hey, %s', name)});
}
