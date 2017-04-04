import supertest from 'supertest';
import should from 'should';
import chai from 'chai';
import { userDetail, roleDetail } from '../testFile.js';
import app from '../../../server';

const expect = chai.expect;
const request = supertest(app);


describe('Route', () => {
  it('should connect to the default route', (done) => {
    request.get('/').expect(200)
      .then((res) => {
        expect(res.body.message).to.equal('Welcome to the beginning of greatness.');
        done();
      })

  })

});
