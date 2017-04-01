import chai from 'chai';
import chaiHttp from 'chai-http';
import { userDetail, roleDetail } from '../testFile';
import app from '../../../server';
import db from '../../models';


const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);
// const request = supertest(app);
const request = chai.request(app);

// console.log(request);

describe('Users', () => {
  let regularToken;
  let adminToken;
  const newUser = {
    id: 10,
    username: 'newnew',
    firstname: 'newnew',
    lastname: 'newnew',
    email: 'newnew@mail.com',
    password: '1111111111'
  };

  before((done) => {
    db.Role.bulkCreate(roleDetail)
    .then(() => {
      db.User.bulkCreate(userDetail)
        .then((use) => {
          console.log(use);
          request.post('/users/login')
          .send({ email: userDetail[1].email, password: userDetail[0].password })
          .end((err, res) => {
            console.log(res.body);
            adminToken = res.body.token;
            console.log(adminToken);
            done();
          });
        });
    });
  });
  after(() => db.Role.destroy({ where: {} }));

  describe('Create Users', () => {
    it('should create a new user', (done) => {
      request.post('/users')
        .send(newUser)
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
      request.post('/users')
      .send(invalid)
      .end((err, res) => {
        res.status.should.be.equal(400);
        done();
      });
    });
  });

  describe('Get User', () => {
    it('should get an existing user', (done) => {
      request.get(`/users/${userDetail[2].id}`)
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Get Multiple Users', () => {
    it('should get all existing users', (done) => {
      request.get('/users')
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Create Admin', () => {
    it('should not allow admin account creation on signup', (done) => {
      request.post('/users')
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
      request.post('/users/login')
        .send(newUser)
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.have.property('token');
          done();
        });
    });
    it('should ensure that all credentials are entered on signin', (done) => {
      request.post('/users/login')
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
      request.post('/users/logout')
        .send(userDetail[2])
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Search User', () => {
    it('should get an existing user', (done) => {
      request.get('/search/users/?q=ti')
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Update User', () => {
    it('should update an existing user\'s credential', (done) => {
      request.put(`/users/${newUser.id}`)
      .send({
        firstname: 'ade',
        lastname: 'jare'
      })
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body.message.should.equal(`User with id ${newUser.id} updated!`);
        done();
      });
    });
  });

  describe('Delete User', () => {
    it('should allow an admin delete an existing user', (done) => {
      request.delete(`/users/${newUser.id}`)
        .set({ 'x-access-token': adminToken })
        .end((err, res) => {
          console.log(res.body);
          res.status.should.be.equal(200);
          res.body.message.should.equal(`User with id ${newUser.id} deleted!`);
          done();
        });
    });
  });
});
