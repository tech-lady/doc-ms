import chai from 'chai';
import chaiHttp from 'chai-http';
import { documentDetail, roleDetail, userDetail } from '../testFile';
import app from '../../../server';
import db from '../../models';


const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);
// const request = supertest(app);
const request = chai.request(app);

// console.log(request);

describe('Documents', () => {
  let regularToken;

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

  describe('Document Api', () => {
    it('should create a new document', (done) => {
      request.post('/documents')
        .send(documentDetail[0])
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(201);
          done();
        });
    });
  });

  describe('Get Documents', () => {
    it('should get existing documents', (done) => {
      request.get('/documents')
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('Get User Document', () => {
    it('should get existing documents', (done) => {
      request.get(`/documents/${documentDetail[0].id}`)
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });
});
