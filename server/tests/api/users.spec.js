import chai from 'chai';
import chaiHttp from 'chai-http';
import { userDetail, roleDetail, defaultUser } from '../testFile';
import app from '../../../testserver';
import db from '../../models';


const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);
const request = chai.request(app);

describe('Users', () => {
  let regularToken;
  let adminToken;
  before((done) => {
    db.Role.bulkCreate(roleDetail)
    .then(() => {
      db.User.bulkCreate(userDetail)
        .then(() => {
          db.User.create(defaultUser[1])
            .then(() => {
              request.post('/api/users/login')
                .send(defaultUser[1])
                .end((err, res) => {
                  adminToken = res.body.token;
                  done();
                });
            });
        });
    });
  });
  after(() => db.Role.destroy({ where: {} }));

  describe('Create Users', () => {
    it('should create a new user', (done) => {
      request.post('/api/users')
        .send(defaultUser[0])
        .end((err, res) => {
          regularToken = res.body.token;
          res.status.should.be.equal(201);
          res.body.should.have.property('token');
          done();
        });
    });
    it('should ensure valid user credentials on signup', (done) => {
      const invalid = {
        firstname: 'sola',
        lastname: '',
        username: '',
        password: 12344567
      };
      request.post('/api/users')
      .send(invalid)
      .end((err, res) => {
        res.status.should.be.equal(400);
        done();
      });
    });
  });

  describe('Get User', () => {
    it('should get an existing user', (done) => {
      request.get(`/api/users/${userDetail[2].id}`)
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Get Multiple Users', () => {
    it('should get all existing users', (done) => {
      request.get('/api/users')
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Create Admin', () => {
    it('should not allow admin account creation on signup', (done) => {
      request.post('/api/users')
      .send(userDetail[0])
      .end((err, res) => {
        res.status.should.be.equal(403);
        res.body.message.should.equal('You are not permitted to signup as an admin');
        done();
      });
    });
  });

  describe('User Login', () => {
    it('should login an already registered user', (done) => {
      request.post('/api/users/login')
        .send(defaultUser[0])
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.have.property('token');
          done();
        });
    });
    it('should ensure that all credentials are entered on signin', (done) => {
      request.post('/api/users/login')
        .send({ email: 'helo01', password: '12' })
        .end((err, res) => {
          res.status.should.be.equal(400);
          res.body.message.should.equal('Invalid username or password');
          done();
        });
    });
  });

  describe('User Logout', () => {
    it('should logout a logged in user', (done) => {
      request.post('/api/users/logout')
        .send(userDetail[2])
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Search User', () => {
    it('should get an existing user', (done) => {
      request.get('/api/search/users/?q=ti')
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          console.log(res.body);
          res.body.should.have.lengthOf(2);
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Update User', () => {
    it('should update an existing user\'s credential', (done) => {
      request.put(`/api/users/${defaultUser[0].id}`)
      .send({
        firstname: 'ade',
        lastname: 'jare'
      })
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body.message.should.equal(`User with id ${defaultUser[0].id} updated!`);
        done();
      });
    });
  });

  describe('Delete User', () => {
    it('should allow an admin delete an existing user', (done) => {
      request.delete(`/api/users/${defaultUser[0].id}`)
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.message.should.equal(`User with id ${defaultUser[0].id} deleted`);
          done();
        });
    });
    it('should disallow a regular user from deleting an existing user', (done) => {
      request.delete(`/api/users/${defaultUser[0].id}`)
        .end((err, res) => {
          res.status.should.be.equal(401);
          done();
        });
    });
  });
});
