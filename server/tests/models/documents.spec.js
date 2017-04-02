// /* eslint no-unused-expressions: "off"*/
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import { userDetail, documentDetail } from '../testFile';
// import app from '../../../server';
// import db from '../../models';

// const expect = chai.expect;
// const should = chai.should();
// chai.use(chaiHttp);
// //const request = supertest(app);
// const request = chai.request(app);


// process.env.NODE_ENV = 'test';

// const User = db.Users;
// const Document = db.Document;
// // const adminUser = userDetail[1];
// // const regUser = userDetail[2];
// const publicDocument = documentDetail[3];

// describe('Document Model', () => {
//   let docData;
//   let userdata;

//     Document.create(documentDetail[3])
//       .then((newUser) => {
//         userdata = newUser;
//         publicDocument.userId = userdata.id;
//         publicDocument.role = String(userdata.roleId);
//         done();
//       });

// after(() => Document.destroy({ where: {} }));

//   describe('Create Document', () => {
//     it('should create new document', (done) => {
//       Document.create(publicDocument)
//         .then((newDocument) => {
//           docData = newDocument;
//           document.should.have.property('ownerRoleId');
//           done();
//         });
//     });
//     it('created new document should exist', () => {
//       expect(docData).toExist();
//       expect(typeof docData).toEqual('object');
//       expect(docData).toExist('title');
//       expect(docData).toExist('docContent');
//     });
//     it('created new document should have name, email', () => {
//       expect(docData.title).toEqual(publicDocument.title);
//       expect(docData.docContent).toEqual(publicDocument.docContent);
//       expect(docData.viewAccess).toEqual(publicDocument.viewAccess);
//     });

//     it('should create a document with correct userId', () => {
//       expect(docData.userId).toEqual(userdata.id);
//     });

//     it('should create a document with published date', () => {
//       expect(docData.createdAt).toExist();
//     });

//     it('should create a document with access set to public', () => {
//       expect(docData.viewAccess).toEqual('public');
//     });
//   });

//   describe('Documents Validation', () => {
//     it('requires title field to create a document', (done) => {
//       Document.create(invalid.emptyTitle)
//         .catch((error) => {
//           expect(/notNull Violation: title cannot be null/
//             .test(error.message)).toBeTruthy;
//           done();
//         });
//     });
//     it('requires unique title field to create a document', (done) => {
//       Document.create(publicDocument)
//         .catch((error) => {
//           expect(/Validation error/.test(error.message)).toBeTruthy;
//           expect(/SequelizeUniqueConstraintError/.test(error.name)).toBeTruthy;
//           done();
//         });
//     });
//   });
// });
