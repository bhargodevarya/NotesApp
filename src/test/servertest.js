const server = require('../server');
const expect = require('chai').expect;
const chai = require('chai')
const chaiHttp = require('chai-http');

chai.use(chaiHttp)

describe('route register', () => {
  describe('register a given route', () => {
    it("register route at port 5000 and return 'test'", () => {
      server.register('/','get',(req,res) => {
        res.send("test");
      });
      server.startServer(5000);
      chai.request('localhost:5000').get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).toBe('test')
        done();
      })
    })
  });
});
