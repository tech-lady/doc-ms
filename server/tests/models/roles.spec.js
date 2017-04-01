/* eslint no-unused-expressions: "off"*/
import chai from 'chai';
import chaiHttp from 'chai-http';
import { roleDetail } from '../testFile';
import app from '../../../server';
import db from '../../models';

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);
// const request = supertest(app);
const request = chai.request(app);

process.env.NODE_ENV = 'test';

const Role = db.Role;


describe('Roles Model', () => {
  let role;
  after(() => Role.destroy({ where: {} }));

  describe('Create Role', () => {
    it('should create new role', (done) => {
      Role.create(roleDetail[2])
        .then((createdRole) => {
          role = createdRole;
          role.should.have.property('title');
          role.should.have.property('id');
          done();
        });
    });
  });

  describe('Role Validation', () => {
    it('requires title field to create a role', (done) => {
      Role.create()
        .catch((error) => {
          error.message.should.equal('notNull Violation: title cannot be null');
          done();
        });
    });
    it('ensures a role can only be created once(unique)', (done) => {
      Role.create(roleDetail[2])
        .catch((error) => {
          error.errors[0].message.should.equal('id must be unique');      
          done();
        });
    });
  });
});
