// /*eslint no-unused-expressions: "off"*/
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import newData from '../testFile';
// import app from '../../../server';
// import db from '../../models';

// const expect = chai.expect;
// const should = chai.should();
// chai.use(chaiHttp);
// // const request = supertest(app);
// const request = chai.request(app);

// describe('User Model', () => {
//   let user;
//   describe('User validation', () => {
//     it('should create new user', (done) => {
//       db.User.create(user)
//       .then((newUser) => {
//         user = newUser;
//         done();
//       });
//     });
//     it('should be able to create a user', () => {
//       expect(user).to.exist;
//       expect(typeof user).to.equal('object');
//     });
//     it('user should have username', () => {
//       expect(user).to.exist;
//       expect(user).to.have.deep.property('username');
//     });
//     it('should create a user with first name & last name', () => {
//       expect(user.firstname).to.equal(db.user.firstname);
//       expect(user.lastname).to.equal(db.user.lastname);
//     });
//     it('should create a user with a valid email', () => {
//       expect(user.email).to.equal(db.user.email);
//     });
//     it('should ensure that username is not null', () => {
//       db.User.create(db.noUsername)
//       .catch((error) => {
//         expect(/notNull Violation: username cannot be null/
//          .test(error.message)).to.be.true;
//       });
//     });
//     it('should create a user with a defined role', (done) => {
//       db.User.findById(user.id, {
//         include: [db.Role]
//       })
//       .then((foundUser) => {
//         expect(foundUser.Role.title).to.equal('User');
//         done();
//       });
//     });
//   });
//   describe('Email validation', () => {
//     it('should ensure that email is authenthic', () => {
//       db.User.create(db.invalidEmail)
//       .catch((error) => {
//         expect(/Validation error: Validation isEmail failed/
//          .test(error.message)).to.be.true;
//       });
//     });
//   });
//   describe('Password Validation', () => {
//     it('should be valid if compared', () => {
//       db.User.create(db.newUser)
//         .then((createdUser) => {
//           expect(createdUser.validPassword(db.newUser.password)).to.be.true;
//         });
//     });
//   });
// });

