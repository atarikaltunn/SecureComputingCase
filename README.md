# Secure Computing Case Solution API

This API is created for Secure Computing Backend Developer Role Case. The important requirements of case are:
- Usage of "swagger" -> you can see after installation at localhost:<PORT>/api-docs
- Documentation (usage of "jsdoc")
- Unit, integration and API tests (I used jest, supertest and cross-env for testing)

## Installation

First of all, you need to NodeJS and npm and MongoDB installed on your machine or server.

1. Create a new folder and go inside
```
mkdir todo-api-example
cd todo-api-example
```

2. Clone the repository
```
git clone https://github.com/atarikaltunn/SecureComputingCase.git
```

3. Install the dependencies
```
npm install
```

4. Create a .env file

Create a folder named .env and add the following part into it
```
MONGODB_URI='<YOUR_MONGODB_URI>'
PORT=<YOUR_SERVER_PORT>
```
If your .env file would be empty, database connection would be made with 'mongodb://localhost:27017/todo', port would be 8000.

5. Start the server
```
npm run start
```

Now, you can reach to /api-docs to find out what can you do with this API.


## Usable npm commands:
- Creates jsdoc documentation
```
npm run docs
```
After using this command, you will be able to reach document on /docs/index.html

- Runs the tests
```
npm run test
```