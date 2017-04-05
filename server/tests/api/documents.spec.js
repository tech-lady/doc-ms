import chai from 'chai';
import chaiHttp from 'chai-http';
import { documentDetail, roleDetail, userDetail } from '../testFile';
import app from '../../../server';
import db from '../../models';

const should = chai.should();
chai.use(chaiHttp);

const request = chai.request(app);

describe('Document Api', () => {
  let regularToken;
  let regularUserToken;

  before((done) => {
    db.Role.bulkCreate(roleDetail)
      .then(() => {
        db.User.create(userDetail[2]).then(() => {
          request.post('/users/login')
            .send(userDetail[2])
            .end((err, res) => {
              regularToken = res.body.token;
              done();
            });
        });
      });
  });

  after(() => {
    db.Role.destroy({ where: {} });
  });

  describe('Create Document', () => {
    it('should create a new document', (done) => {
      request.post('/documents')
        .send(documentDetail[2])
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(201);
          done();
        });
    });
    it('should ensure that title is not null', (done) => {
      request.post('/documents')
      .send({
        content: 'This is just a test'
      })
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(400);
        res.body.message.should.equal('notNull Violation: title cannot be null');
        res.body.name.should.equal('SequelizeValidationError');
        done();
      });
    });
    it('should ensure content is not null', (done) => {
      request.post('/documents')
      .send({
        title: 'I am a title'
      })
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(400);
        res.body.message.should.equal('notNull Violation: content cannot be null');        
        done();
      });
    });
    it('should ensure access is either public or private', (done) => {
      request.post('/documents')
      .send({
        title: 'Hello Worlgffgffgd',
        content: 'Welcome to this worldgfghggh',
        access: 'what'
      })
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(400);
        res.body.message.should.equal('invalid input value for enum "enum_Documents_access": "what"');
        res.body.name.should.equal('SequelizeDatabaseError');
        done();
      });
    });
    it('should ensure access level set to private is valid', (done) => {
      request.post('/documents')
       .send({
         title: 'Heyyyyyy there',
         content: 'Just testing this oooo',
         access: 'private'
       })
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(201);
        res.body.access.should.equal('private');
        done();
      });
    });
  });

  describe('Get Documents', () => {
    before((done) => {
      db.User.create(userDetail[3]).then(() => {
        request.post('/users/login')
        .send(userDetail[3])
        .end((err, res) => {
          regularUserToken = res.body.token;
          request.post('/documents')
          .send({ title: 'andela', content: 'andela new andela', access: 'private' })
          .set({ 'x-access-token': regularUserToken })
          .end(() => {
            done();
          });
        });
      });
    });
    it('should get existing documents', (done) => {
      request.get('/documents')
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          console.log(res.body);
          res.status.should.be.equal(200);
          done();
        });
    });
    it('should ensure user cannot retrieve other users private document', (done) => {
      request.get('/documents')
      .set({ 'x-access-token': regularUserToken })
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.rows.forEach((doc) => {
          if (doc.ownerId === userDetail[3].id) {
            doc.access.should.be.oneOf(['public', 'private', 'role']);
          } else {
            doc.access.should.be.equal('public');
          }
        });
        done();
      });
    });
  });

  describe('Get User Document', () => {
    it('should get documents for user', (done) => {
      request.get(`/documents/${documentDetail[0].id}`)
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Get Public Documents', () => {
    it('should get all public documents for user', (done) => {
      request.get('/documents/public')
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
    });
  });

  describe('Search Documents', () => {
    it('should search for documents', (done) => {
      request.get('/search/documents?q=a')
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body[0].should.have.property('title');
        done();
      });
    });
  });

  describe('Search User Document', () => {
    it('should allow to a user to search for his document', (done) => {
      request.get('/search/documents/user/5?q=are')
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body[0].should.have.property('title');
        done();
      });
    });
  });

  describe('Share Private Document', () => {
    it('should allow user to share private documents at will', (done) => {
      request.put(`/documents/${documentDetail[2].id}/sharedocument`)
        .send({ shareUserEmail: userDetail[3].email })
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.shareId.includes(userDetail[3].id).should.equal(true);
          done();
        });
    });
  });
  describe('View Private Document', () => {
    it('should be able to retrieve and view private documents for the user', (done) => {
      request.get('/documents/private')
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.rows.forEach((doc) => {
            doc.access.should.equal('private');
            doc.ownerId.should.equal(userDetail[2].id);
          });
          done();
        });
    });
  });

  describe('Edit Document', () => {
    it('should allow user to edit document', (done) => {
      request.put(`/documents/${documentDetail[2].id}`)
      .send({ title: 'edit', content: 'updating content'})
      .set({ 'x-acess-token': regularToken })
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.message.should.equal('Update successful');       
      });
      done();
    });
  });
  describe('Delete Document', () => {
    it('should ensure that user can delete document', (done) => {
      request.delete(`/documents/${documentDetail[2].id}`)
      .set({ 'x-access-token': regularToken })
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.message.should.equal('Delete successful');
      });
      done();
    });
  });
});