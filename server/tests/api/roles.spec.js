import chai from 'chai';
import chaiHttp from 'chai-http';
import { roleDetail, userDetail } from '../testFile';
import app from '../../../server';
import db from '../../models';


const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);
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
      request.post('/users/login')
        .send(userDetail[1])
        .end((err, res) => {
          adminToken = res.body.token;
          request.post('/users/login')
            .send(userDetail[2])
            .end((error, resp) => {
              regularToken = resp.body.token;
              done();
            });
        });
    });
    it('should allow an Admin to create a new role', (done) => {
      request.post('/roles')
        .send({ id: 4, title: 'test' })
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          res.body.newRole.title.should.equal('test');
          res.status.should.be.equal(201);
          done();
        });
    });
    it('should not allow a regular user to create role', (done) => {
      request.post('/roles')
        .send({ id: 5, title: 'newtest' })
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(403);
          res.body.message.should.equal('Access forbidden, you are not an admin!');
          done();
        });
    });
    it('should not create role when token is not supplied', (done) => {
      request.post('/roles')
        .send({ id: 6, title: 'newnew' })
        .end((err, res) => {
          res.status.should.equal(401);
          res.body.message.should.equal('Authentication required to access this route!');
          done();
        });
    });
    it('should not create role with an existing title', (done) => {
      request.post('/roles')
        .send({ id: 7, title: 'test' })
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          res.status.should.equal(409);
          done();
        });
    });
  });

  describe('Get Role', () => {
    it('should get existing role', (done) => {
      request.get(`/roles/${roleDetail[2].id}`)
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Get Roles', () => {
    it('should get all existing roles', (done) => {
      request.get('/roles')
    .set({ 'x-access-token': adminToken })
    .end((err, res) => {
      res.status.should.equal(200);
      done();
    });
    });
  });

  describe('Update Roles', () => {
    it('should return forbidden error on attempt to update super-admin', (done) => {
      request.put(`/roles/${roleDetail[0].id}`)
      .set({ 'x-access-token': adminToken })
      .end((err, res) => {
        res.status.should.equal(403);
        res.body.message.should.equal('SuperAdmin role can not be updated');
        done();
      });
    });

    it('should return error for unidentified role update', (done) => {
      request.put('/roles/5344')
      .send((roleDetail[4]))
      .set({ 'x-access-token': adminToken })
      .end((err, res) => {
        res.status.should.equal(404);
        done();
      });
    });

    it('should sucessfully update for an available role', (done) => {
      request.put(`/roles/${roleDetail[2].id}`)
      .send({ title: 'hello' })
      .set({ 'x-access-token': adminToken })
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
    });
  });

  describe('Delete Role', () => {
    it('should be able to delete role on valid request', (done) => {
      request.delete(`/roles/${roleDetail[2].id}`)
    .set({ 'x-access-token': adminToken })
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
    });
    it('should return forbidden error on attempt to delete super-admin', (done) => {
      request.delete(`/roles/${roleDetail[0].id}`)
      .set({ 'x-access-token': adminToken })
      .end((err, res) => {
        res.status.should.equal(403);
        res.body.message.should.equal('SuperAdmin role can not be deleted');
        done();
      });
    });

    it('should return error on attempt to delete an unidentified role', (done) => {
      request.delete('/roles/5344')
      .send((roleDetail[4]))
      .set({ 'x-access-token': adminToken })
      .end((err, res) => {
        res.status.should.equal(404);
        done();
      });
    });
  });
});
