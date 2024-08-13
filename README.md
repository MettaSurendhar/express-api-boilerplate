# Express API Boilerplate - reusable code template

This directory contains the foundational structure for an Express.js API, including controllers, routes, and validators. The code is modularized for ease of maintenance and scalability.

## Overview

This boilerplate is designed to provide a solid foundation for building robust and scalable Express.js APIs. It includes a modularized structure, with separate modules for controllers, routes, and validators, making it easy to maintain and extend.

## Features

- Modularized structure for easy maintenance and scalability
- Includes controllers, routes, and validators for a complete API solution
- Uses Express.js as the web framework
- Utilizes the express-validator module for request data validation

## Directory Structure

### Controller Module (`controller.js`)

**Description**
The `controller.js` module exports a single function, `_controller_func`, which contains the business logic for handling requests.

**Functionality**

- Takes an Express request object (req) and response object (res) as arguments
- Handles errors and logs them using a logger utility function

### Route Module (`route.js`)

**Description**
The route.js module exports a configured Express router instance.

**Functionality**

- Defines two routes: a GET route and a POST route
- Uses the `_controller_func` function from the controller.js module as the route handler
- Uses a validator function from the validator.js module to validate request data

### Validator Module (`validator.js`)

**Description**
The `validator.js` module exports a single function, `_validator_func`, which is a middleware function that validates request data using the express-validator module.

**Functionality**

- Checks if a specific field is present in the request body
- Sets a custom error message if the field is not present

## Usage

To use these modules, simply require them in your Express.js application and configure them as needed.

## API Documentation

### Routes

#### `GET /`

- **Description**: Handles GET requests. Executes the `__controller_func` controller function.
- **Parameters**: None
- **Request Validation**: None
- **Response**:
  - **200 OK**: Returns data processed by `__controller_func`.
  - **500 Internal Server Error**: Returns an error message if an exception occurs.

#### `POST /`

- **Description**: Handles POST requests. Executes the `__controller_func` controller function.
- **Parameters**:
  - **Body**:
    - `field_name` (string): Required field in the request body.
- **Request Validation**:
  - `field_name` must be provided and not empty.
- **Response**:
  - **200 OK**: Returns data processed by `__controller_func`.
  - **500 Internal Server Error**: Returns an error message if an exception occurs.

## Test Cases

Test cases are provided in the `test` directory. The tests are implemented using `mocha` and `chai` and cover the API endpoints defined in this directory.

### Running Tests

To run the tests, make sure you have `mocha`, `chai`, and `chai-http` installed. You can install them using:

`npm install mocha chai chai-http`

## Contribution

Contributions to enhance the structure or add new features to this boilerplate are welcome. Please follow the guidelines provided in the main repository's README.

## License

This project is licensed under the MIT License. Refer to the main repository's LICENSE file for more information.

## Getting Started

To get started with this boilerplate, follow these steps:

1. Clone the repository
2. Install the required dependencies using npm or yarn
3. Configure the modules as needed for your application
4. Start building your API!

## FAQs

- Q: **How do I contribute to this boilerplate?** A: Contributions are welcome! Please follow the guidelines provided in the main repository's README.

- Q: **What is the license for this project?** A: This project is licensed under the MIT License. Refer to the main repository's LICENSE file for more information.

- Q: **How do I get started with this boilerplate?** A: Follow the steps outlined in the Getting Started section above.
