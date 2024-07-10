const request = require('supertest');
const app = require('../app'); // Adjust the path to your app
const Book = require('../models/book'); // Adjust the path to your Book model

process.env.NODE_ENV = "test";

beforeEach(async () => {
  await Book.create({isbn: '1234567890', title: 'Test Book', author: 'Test Author', year: 2020});
});

afterEach(async () => {
  await Book.deleteAll();
});

describe('GET /books', () => {
  test('gets a list of books', async () => {
    const response = await request(app).get('/books');
    expect(response.statusCode).toBe(200);
    expect(response.body.books.length).toBeGreaterThan(0);
  });

  test('returns an empty list if no books exist', async () => {
    await Book.deleteAll();
    const response = await request(app).get('/books');
    expect(response.statusCode).toBe(200);
    expect(response.body.books.length).toBe(0);
  });
});

describe('GET /books/:id', () => {
  test('gets a single book', async () => {
    const response = await request(app).get('/books/1234567890');
    expect(response.statusCode).toBe(200);
    expect(response.body.book).toHaveProperty('isbn');
  });

  test('returns 404 for invalid book ID', async () => {
    const response = await request(app).get('/books/999');
    expect(response.statusCode).toBe(404);
  });
});

describe('POST /books', () => {
  test('creates a new book', async () => {
    const newBook = {isbn: '0987654321', title: 'New Book', author: 'New Author', year: 2021};
    const response = await request(app).post('/books').send(newBook);
    expect(response.statusCode).toBe(201);
    expect(response.body.book).toHaveProperty('isbn');
  });

  test('returns 400 for invalid book data', async () => {
    const invalidBook = {title: 'Invalid Book'};
    const response = await request(app).post('/books').send(invalidBook);
    expect(response.statusCode).toBe(400);
  });
});

describe('PUT /books/:isbn', () => {
  test('updates an existing book', async () => {
    const updatedBook = {title: 'Updated Book', author: 'Updated Author', year: 2022};
    const response = await request(app).put('/books/1234567890').send(updatedBook);
    expect(response.statusCode).toBe(200);
    expect(response.body.book).toHaveProperty('isbn');
  });

  test('returns 404 for updating a non-existent book', async () => {
    const updatedBook = {title: 'Updated Book', author: 'Updated Author', year: 2022};
    const response = await request(app).put('/books/999').send(updatedBook);
    expect(response.statusCode).toBe(404);
  });

  test('returns 400 for invalid update data', async () => {
    const invalidUpdate = {year: 'invalid year'};
    const response = await request(app).put('/books/1234567890').send(invalidUpdate);
    expect(response.statusCode).toBe(400);
  });
});

describe('DELETE /books/:isbn', () => {
  test('deletes an existing book', async () => {
    const response = await request(app).delete('/books/1234567890');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Book deleted');
  });

  test('returns 404 for deleting a non-existent book', async () => {
    const response = await request(app).delete('/books/999');
    expect(response.statusCode).toBe(404);
  });
});
