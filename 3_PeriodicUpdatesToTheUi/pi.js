/** @format */

var state = {};
state.pi = 0;
state.k = 0;
setInterval(this.postMessage(state), 1000);
for (var i = 0; i < 1000000000; i++) {
  state.k++;
  state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
}
this.postMessage(state);
