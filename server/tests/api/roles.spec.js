import supertest from 'supertest';
import should from 'should';
import chai from 'chai';
import { userDetail, roleDetail } from '../testFile.js';
import app from '../../../server';
import db from '../../models';

const expect = chai.expect;
const request = supertest(app);


describe('Roles', () => {
  before((done) => {
    db.Role.sequelize.sync({ force: true })
    done()
  })
  const newRole = {
    title: 'Special'
  };
  it('should create a new role', (done) => {
    request.post('/roles').send(newRole).expect(201)
      .then((res) => {
        expect(res.body.message).to.equal('New role has been assigned');
        done();
      })

  })

});
