# Secure Computing Case Solution API

This API is created for Secure Computing Backend Developer Role Case. The important requirements of case are:
- Usage of swagger -> you can see after installation at localhost:<PORT>/api-docs
- Documentation (usage of jsdoc)
- Unit, integration and API tests

## Installation

First of all, you need to NodeJS and npm and MongoDB installed on your machine or server.

1. Create a new folder and go inside
```
mkdir todo-example
cd todo-example
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
DB='<YOUR_MONGODB_URL>'
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

- Runs the Jest tests
```
npm run test
```