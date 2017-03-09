/**
 * Created by Mihail on 3/9/2017.
 */
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function diff21(n) {
  var diff = Math.abs(n - 21);
  return n > 21 ? diff * 2 : diff;
}

function parrotTrouble(talking, hour) {
  return !!(talking && ((hour < 7 && hour >= 0) || (hour > 20 && hour <= 23)));

}

module.exports = {
  add: add,
  substract: substract,
  diff21: diff21,
  parrotTrouble: parrotTrouble
};