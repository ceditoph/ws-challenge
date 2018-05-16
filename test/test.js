var assert = require('assert');
const app = require('../../server/server').app;
let server; 

before(done => {
  server = app.listen(3000, done);
});
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});