const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  it('should set the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });


  describe('GET /', () => {

    // http status code (200, 400, 500, etc.)
    it('should return 200 OK', async () => {

      const res = await request(server).get('/');
      expect(res.status).toBe(200)
    })


    // format of the data (JSON, XML, etc.)
    it('should return a JSON object', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    })


    // test for json body structure
    // structure of the return data ({field: value, field2: value})
    it('should return {api: "up"}', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({api: "up"});
    })

  })
});

