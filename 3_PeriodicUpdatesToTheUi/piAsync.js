/** @format */

var state = {};
state.p = 0;
state.k = 0;
var date = new Date();
for (var i = 0; i < 10000000; i++) {
  if (new Date() - date > 1000) {
    this.postMessage(state);
    date = new Date();
  }
  state.k++;
  state.p += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
}
this.postMessage(state);
