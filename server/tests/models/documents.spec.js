/* eslint no-unused-expressions: "off"*/
import chai from 'chai';
import chaiHttp from 'chai-http';
import { userDetail, roleDetail, documentDetail } from '../testFile';
import app from '../../../server';
import db from '../../models';

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);
//const request = supertest(app);


process.env.NODE_ENV = 'test';

const User = db.User;
const Document = db.Document;
const Role = db.Role;
// const adminUser = userDetail[1];
// const regUser = userDetail[2];
const publicDocument = documentDetail[3];

describe('Document Model', () => {
  let docData;
  let userData;

  before((done) => {
    Role.bulkCreate(roleDetail)
  .then(() => {
    User.create(userDetail[2])
    .then(() => {
      done();
    });
  });
  });

  after(() => db.Role.destroy({ where: {} }));

  describe('Create Document', () => {
    it('should create new document', (done) => {
      Document.create(publicDocument)
        .then((newDocument) => {
          console.log(newDocument);
          docData = newDocument;
          docData.should.have.property('ownerRoleId');
          done();
        });
    });

    it('created new document should exist', () => {
      docData.should.have.property('access');
      //docData.should.be.an('object');
      docData.should.have.property('title');
      docData.should.have.property('content');
    });
    it('created new document should have name, email', () => {
      docData.title.should.equal(publicDocument.title);
      docData.content.should.equal(publicDocument.content);
      docData.access.should.equal(publicDocument.access);
    });

    it('should create a document with correct userId', () => {
      docData.ownerId.should.equal(userDetail[2].id);
    });

    it('should create a document with published date', () => {
      docData.createdAt.should.be.defined;
    });

    it('should create a document with access set to public', () => {
      docData.access.should.equal('public');
    });
  });

  describe('Documents Validation', () => {
    it('requires title field to create a document', (done) => {
      Document.create()
        .catch((error) => {
          error.message.should.equal('notNull Violation: title cannot be null,\nnotNull Violation: content cannot be null');
          done();
        });
    });
    it('requires unique title field to create a document', (done) => {
      Document.create(publicDocument)
        .catch((error) => {
          error.message.should.equal('Validation error');
          error.name.should.equal('SequelizeUniqueConstraintError');
          done();
        });
    });
  });
});
