/** @format */

function* calculatePi() {
  var pi = 0;
  for (var k = 0; k < 1000000000; k++) {
    pi += (4 * Math.pow(-1, k + 1)) / (2 * k - 1);
    if (Math.trunc(k / 1000) * 1000 == k) {
      yield pi;
    }
  }
}

var pi; //Global declaration in order to post the data back to the UI
function CalculatePiHandler() {
  var genObj = calculatePi();
  function resume() {
    pi = genObj.next();
    if (!pi.done) {
      setTimeout(resume, 0);
    }
    if (pi.done) {
      this.postMessage(pi);
    }
  }
  setTimeout(resume, 0);
  return;
}

//Controller functions
this.addEventListener('message', function (event) {
  switch (event.data) {
    case 'start':
      CalculatePiHandler();
      break;
    case 'update':
      this.postMessage(pi);
      break;
    default:
      break;
  }
});
