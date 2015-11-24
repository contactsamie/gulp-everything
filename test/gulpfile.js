var should = require('chai').should(),
    gulp_everything = require('../gulpfile'),
   giveback=gulp_everything.giveback;
   
describe('#escape', function() {
  it('returns what i sent it', function() {
    giveback('me').should.equal('me');
  }); 
});