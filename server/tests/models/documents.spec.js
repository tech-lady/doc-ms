// /* eslint no-unused-expressions: "off"*/
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


// process.env.NODE_ENV = 'test';

// const User = db.Users;
// const Document = db.Documents;
// // const adminUser = newData.adminUser;
// const regUser = newData.newUser;
// const publicDocument = newData.publicDoc;

// describe('Document Model', () => {
//   let docData;
//   let userdata;

//   before((done) => {
//     User.create(regUser)
//       .then((newUser) => {
//         userdata = newUser;
//         publicDocument.userId = userdata.id;
//         publicDocument.role = String(userdata.roleId);
//         done();
//       });
//   });

//   describe('Create Document', () => {
//     it('should create new document', (done) => {
//       Document.create(publicDocument)
//         .then((newDocument) => {
//           docData = newDocument;
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
