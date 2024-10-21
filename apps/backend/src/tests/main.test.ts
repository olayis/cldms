import request from 'supertest';
import app from '../main';
import http from 'http';
import { AddressInfo } from 'net';

let server: http.Server;
let port: number;

beforeAll((done) => {
  server = app.listen(0, () => {
    const address = server.address();
    if (typeof address === 'object' && address !== null) {
      port = (address as AddressInfo).port; // Extract port from AddressInfo
      console.log(`Test server running on port ${port}`);
    }
    done();
  });
});

afterAll((done) => {
  server.close(done); // Ensure the server is closed after tests
});

describe('GET /', () => {
  it('should return a message', async () => {
    const response = await request(`http://localhost:${port}`).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello API');
  });
});
