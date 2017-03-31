import chai from 'chai';
import chaiHttp from 'chai-http';
import { roleDetail, userDetail } from '../testFile';
import app from '../../../server';
import db from '../../models';


const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);
// const request = supertest(app);
const request = chai.request(app);

describe('Roles', () => {
  let regularToken;
  let adminToken;
  before((done) => {
    db.Role.create(roleDetail[1])
      .then(() => {
        db.Role.create(roleDetail[2])
          .then(() => {
            db.User.create(userDetail[1])
              .then(() => {
                db.User.create(userDetail[2])
                  .then(() => {
                    done();
                  });
              });
          });
      });
  });
  after(() => {
    db.Role.destroy({ where: {} });
  });
  describe('Create Roles Api', () => {
    before((done) => {
      request.post('/api/users/login')
        .send(userDetail[1])
        .end((err, res) => {
          adminToken = res.body.token;
          request.post('/api/users/login')
            .send(userDetail[2])
            .end((error, resp) => {
              regularToken = resp.body.token;
              done();
            });
        });
    });
    it('should allow an Admin to create a new role', (done) => {
      request.post('/api/roles')
        .send({ id: 4, title: 'test' })
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          res.body.newRole.title.should.equal('test');
          res.should.have.status(201);
          done();
        });
    });
    it('should not allow a regular user to create role', (done) => {
      request.post('/api/roles')
        .send({ id: 5, title: 'newtest' })
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.should.have.status(403);
          res.body.message.should.equal('Access forbidden, you are not an admin!');
          done();
        });
    });
    it('should not create role when token is not supplied', (done) => {
      request.post('/api/roles')
        .send({ id: 6, title: 'newnew' })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.message.should.equal('Authentication required to access this route!');
          done();
        });
    });
    it('should not create role with an existing title', (done) => {
      request.post('/api/roles')
        .send({ id: 7, title: 'test' })
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          console.log(res.body);
          done();
        });
    });
  });
});
