/** @format */

function calculatePi() {
  var state = {};
  state.pi = 0;
  state.k = 0;
  for (var i = 0; i < 10000000000; i++) {
    state.k++;
    state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
  }
  return state;
}

var piVal = calculatePi();
this.postMessage(piVal);