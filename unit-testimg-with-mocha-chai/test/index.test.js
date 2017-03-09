/**
 * Created by Mihail on 3/9/2017.
 */
var assert = require('assert');
var calc = require('../src/calculator');

describe('Numbers calculations', function() {
  describe('Method add()', function() {

    it('should sum two given numbers', function() {
      var res = calc.add(3, 4);
      assert.equal(res, 7);
    });
  });
});