'use strict';

const app = require('..');
const request = require('request-promise');
const pEvent = require('p-event');
const assert = require('assert');

describe('bug', () => {
  it('fails', async () => {
    await pEvent(app.listen(3000), 'listening');

    const options = {
      uri: 'http://localhost:3000/api/contacts',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      json: {
        "name": "Sharath",
      }
    };

  await request(options)
    .then(function (response) {
      console.log('\n response : ' + JSON.stringify(response));
    })
    .catch(function (reason) {
      console.log('property names', Object.keys(reason));
      console.log('  name', reason.name);
      console.log('  statusCode', reason.statusCode);
      console.log('  message', reason.message);
      console.log('  error', reason.error);
      console.log('  response body', reason.response.body);

      assert.deepEqual(reason.response.body, {
        error: {
          statusCode: 400,
          name: 'Error',
          message: 'test',
          details: {
            reason: 'testing',
          }
        }
      });
    })
  });
});
