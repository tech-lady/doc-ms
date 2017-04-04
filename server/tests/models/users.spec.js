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

  describe('Create User', () => {
    it('should create new user', (done) => {
      db.User.create(userDetail[2])
      .then((newUser) => {
        user = newUser;
        done();
      });
    });

    it('should be able to create a user', (done) => {
      user.should.be.defined;
      expect(typeof user).to.equal('object');
      done();
    });
    it('user should have username', (done) => {
      user.should.exist;
      user.should.have.property('username');
      done();
    });
    it('should create a user with first name & last name', (done) => {
      user.firstname.should.equal(userDetail[2].firstname);
      user.lastname.should.equal(userDetail[2].lastname);
      done();
    });
    it('should create a user with a valid email', (done) => {
      user.email.should.equal(userDetail[2].email);
      done();
    });
    it('should ensure that username is not null', (done) => {
      db.User.create(invalidUserParams[1])
      .catch((error) => {
        error.message.should.equal('notNull Violation: username cannot be null')
        done();
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

  describe('User validation', () => {
    describe('User Validation', () => {
      it('requires firstname field to create a user', (done) => {
        db.User.create(invalidUserParams[2].firstname)
        .catch((error) => {
          /notNull Violation/.test(error.message).should.be.true;
          done();
        });
      });
      it('requires email field to create a user', (done) => {
        db.User.create(invalidUserParams[0].email)
        .catch((error) => {
         /notNull Violation/.test(error.message).should.be.true;
          done();
        });
      });
      it('requires username field to create a user', (done) => {
        db.User.create(invalidUserParams[2].username)
        .catch((error) => {
          /notNull Violation/.test(error.message).should.be.true;
          done();
        });
      });
      it('ensures a user can only be created once(unique)', (done) => {
        db.User.create(user)
        .catch((error) => {
          /notNull Violation/.test(error.message).should.be.true;
          done();
        });
      });
      it('ensures a username can only be created once(unique)', (done) => {
        db.User.create(invalidUserParams[3].username)
        .catch((error) => {
          /notNull Violation/.test(error.message).should.be.true;
          done();
        });
      });
    });
  });
  
  describe('Email Validation', () => {
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

