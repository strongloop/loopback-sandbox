'use strict';

const app = require('..');
const supertest = require('supertest');

describe('bug', () => {
  it('fails', async () => {
    const response = await supertest(app)
      .post('/api/contacts')
      .send({name: 'Sharath'})
      .expect(400, {
        error: {
          statusCode: 400,
          name: 'Error',
          message: 'test',
          details: {
            reason: 'testing',
          }
        }
      });
  });
});
