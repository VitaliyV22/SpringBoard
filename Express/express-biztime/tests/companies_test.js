const request = require('supertest');
const app = require('../app');
const db = require('../db');

beforeEach(async () => {
  await db.query("INSERT INTO companies (code, name, description) VALUES ('test', 'Test Company', 'This is a test company')");
});

afterEach(async () => {
  await db.query("DELETE FROM companies WHERE code='test'");
});

afterAll(async () => {
  await db.end();
});

test('GET /companies', async () => {
  const res = await request(app).get('/companies');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ companies: [{ code: 'test', name: 'Test Company' }] });
});
