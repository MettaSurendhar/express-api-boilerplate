// import the express-validator module, which provides a set of validators and sanitizers for Express.js
const { body, header, param, query } = require('express-validator');

// import type definitions for req, res, and next
const typedefs = require('../typedefs');

/**
 * Validator middleware function
 *
 * Use the necessary part of the request, such as params for URL parameters, or query for query parameters.
 *
 * Refer https://github.com/validatorjs/validator.js for a full list of the validators and sanitizers available.
 *
 * @param {typedefs.Req} req
 * @param {typedefs.Res} res
 * @param {typedefs.Next} next
 */
const __validator_func = async (req, res, next) => {
	// validate the 'field_name' property in the request body
	// notEmpty() checks if the field is not empty, and withMessage() sets a custom error message
	await body('field_name')
		.notEmpty() // check if the field is not empty
		.withMessage('field_name not defined in body') // set a custom error message
		.run(req); // run the validation on the request object

	// if the validation passes, call the next middleware function
	next();
};

// export the validator function as a module
module.exports = {
	__validator_func,
};
