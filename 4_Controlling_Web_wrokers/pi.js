/** @format */

function computePi() {
  var state = {};
  state.pi = 0;
  state.k = 0;
  for (var i = 0; i < 100000000; i++) {
    if (state.k == 10000) {
      this.postMessage(state);
      this.close(); //depreciated and should not be used
    }
    state.k++;
    state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
  }
  this.postMessage(state);
}
computePi();