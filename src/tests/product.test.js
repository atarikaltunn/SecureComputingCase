const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

/* GET method test for jest */
describe('GET /todo-list', () => {
    it('should return all todos', async () => {
        const res = await request(app).get('/todo-list');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

/* POST method test for jest */
describe('POST /todo-list', () => {
    it('should create a todo', async () => {
        const res = await request(app).post('/todo-list').send({
            name: 'Test the Jest for the Node ^-^',
            status: 'starts when you call the test',
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Test the Jest for the Node ^-^');
    });
});

/* PUT method test for jest */
describe("PUT /todo-list/:id", () => {
    it("should update a todo", async () => {
      const res = await request(app)
        .patch("/todo-list/638b12e931d755d0cf946113")
        .send({
            name: "make no sense",
            status: "in progress"
        });
      expect(res.statusCode).toBe(201);
    });
  });

/* DELETE method test for jest */
describe('DELETE /todo-list', () => {
    it('should delete a todo', async () => {
        const res = await request(app).delete(
            '/todo-list/<TODO_ID>'
        );
        expect(res.statusCode).toBe(200);
    });
});
