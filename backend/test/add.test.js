const request = require('supertest');
const express = require('express');
const app = express();

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.json({ sum });
});

describe('GET /add', () => {
  it('should return sum of two numbers', async () => {
    const res = await request(app).get('/add?a=5&b=10');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sum', 15);
  });
});
