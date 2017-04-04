import chai from 'chai';
import db from '../../models';

const should = chai.should();

describe('Create Models', () => {
  it('should have Roles Model', () => {
    db.Role.should.exist;
  });
  it('should have Users Model', () => {
    db.User.should.exist;
  });
  it('should have Documents Model', () => {
    db.Document.should.exist;
  });
});
