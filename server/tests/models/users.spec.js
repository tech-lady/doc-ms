/*eslint no-unused-expressions: "off"*/
import chai from 'chai';
import { userDetail, roleDetail, invalidUserParams } from '../testFile';
import db from '../../models';

const expect = chai.expect;
const should = chai.should();

describe('User Model', () => {
  let user;
  const Role = db.Role;

  before((done) => {
    Role.bulkCreate(roleDetail)
      .then(() => {
        done();
      });
  });

  after(() => db.Role.destroy({ where: {} }));

  describe('User validation', () => {
    it('should create new user', (done) => {
      db.User.create(userDetail[2])
      .then((newUser) => {
        user = newUser;
        done();
      });
    });

    it('should be able to create a user', () => {
      user.should.be.defined;
      expect(typeof user).to.equal('object');
    });
    it('user should have username', () => {
      user.should.exist;
      user.should.have.property('username');
    });
    it('should create a user with first name & last name', () => {
      user.firstname.should.equal(userDetail[2].firstname);
      user.lastname.should.equal(userDetail[2].lastname);
    });
    it('should create a user with a valid email', () => {
      user.email.should.equal(userDetail[2].email);
    });
    it('should ensure that username is not null', () => {
      db.User.create(invalidUserParams[1])
      .catch((error) => {
        error.message.should.equal('notNull Violation: username cannot be null')
      });
    });
    it('should create a user with a defined role', (done) => {
      db.User.findById(user.id, {
        include: [db.Role]
      })
      .then((foundUser) => {
        foundUser.Role.title.should.equal('regular');
        done();
      });
    });
  });
  describe('Email validation', () => {
    it('should ensure that email is authenthic', () => {
      db.User.create(invalidUserParams[0])
      .catch((error) => {
        error.message.should.equal('Validation error: Validation isEmail failed')
      });
    });
  });
  describe('Password Validation', () => {
    it('should be valid if compared', () => {
      db.User.findById(user.id)
        .then((foundUser) => {
          foundUser.authenticate(userDetail[2].password).should.be.true;
        });
    });
  });
});

