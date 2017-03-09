/**
 * Created by Mihail on 3/9/2017.
 */
var assert = require('assert');
var calc = require('../src/calculator');

describe('Numbers calculator', function() {
  it('should be able to sum two given numbers', function() {
    var res = calc.add(3, 4);
    assert.equal(res, 7);
  });

  it('should be able to substract two given numbers', function() {
    var res = calc.substract(6, 3);
    assert.equal(res, 3);
  });

  it('should return the absolute difference between n and 21 when given int n, except return double the absolute difference if n is over 21.', function() {

  });
});