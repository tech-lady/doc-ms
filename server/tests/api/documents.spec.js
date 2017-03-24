import supertest from 'supertest';
import should from 'should';
import chai from 'chai';
import { userDetail, documentDetail } from '../testFile.js';
// import app from '../../server';
// import db from '../../models';

const expect = chai.expect;

// describe('Document controller', () => {
//       let token = null;
//       let adminToken = null;
//       before((done) => {
//         db.Role.createDocument([
//           { title: 'regular' },
//           { title: 'admin' }
//         ], { validate: true }).then(() => {
//           db.User.createDocument(userData, { validate: true })
//             .then(() => {
//               db.Document.createDocument(documentData, { validate: true })
//                 .then(() => {
//                   chai.request(app)
//                     .post('/users/login')
//                     .send({
//                       username: 'bestie',
//                       password: '12345678'
//                     })
//                     .then((res) => {
//                       token = res.body.token;
//                       chai.request(app)
//                         .post('/users/login')
//                         .send({
//                           username: 'jbaby',
//                           password: '12345678'
//                         }).then((res) => {
//                           adminToken = res.body.token;
//                           done();
//                         });
//                     });
//                 });
//             });
//         }).catch((a) => {
//           throw a;
//         });
//       });

//       after((done) => {
//         db.sequelize.sync({ force: true }).then(() => done());
//       });
//       describe('Create Document', () => {
//           it('should create a document with published date defined', (done) => {
//             request(server).post('/documents').send()
//               .set('Authorization', )
//               .expect(201)
//               .then((res) => {
//                 res.body;
//                 expect(res.body.published).to.not.equal(undefined);
//                 done();
//               });
//           });
//         }
//       }
describe('Document', () => {
  it('should run test', () => {
    expect
      (true).to.be.true;
  })

});
