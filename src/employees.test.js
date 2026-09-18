const request = require('supertest');
const express = require('express');
const { router } = require('./employees');

const app = express();
app.use('/employees', router);

describe('GET /employees/search', () => {
  it('should return employees matching the department', async () => {
    const res = await request(app).get('/employees/search?department=Engineering');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
    expect(res.body[0].name).toEqual('Alice Smith');
  });

  it('should return 400 if department parameter is missing', async () => {
    const res = await request(app).get('/employees/search');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});
