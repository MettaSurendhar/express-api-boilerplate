// Create a new Express router instance
const router = require('express').Router();

// Import the validate function from the validators module
const { validate } = require('../validators');

// Import the __controller_func function from the controller module
const { __controller_func } = require('./controller');

// Define a GET route for the router
router.get(
	// URL path for the route (e.g. '/', '/users', etc.)
	'/',
	// Optional middleware functions to run before the route handler
	// (e.g. authentication, rate limiting, etc.)
	[],
	// Validators to run on the request data (e.g. body, query, params)
	// using the validate function imported above
	validate([]),
	// Call the validate function to run the validators
	validate,
	// The route handler function to call when the request is valid
	__controller_func
);

// Define a POST route for the router (similar to the GET route above)
router.post(
	// URL path for the route
	'/',
	// Optional middleware functions
	[],
	// Validators to run on the request data
	validate([]),
	// Call the validate function
	validate,
	// The route handler function
	__controller_func
);

// Export the configured router instance as a module
module.exports = router;
