/** @format */

document.querySelector('.append').addEventListener('click', function (event) {
  var parent = document.querySelector('.append-parent');
  var child = document.createElement('p');
  child.innerHTML = `paragraph added at ${new Date().toString()}`;
  parent.appendChild(child);
});

//#region trying to update the UI periodically

//Implementation of the UI using setInterval
// The following style won't update the UI periodically
document.querySelector('.compute').addEventListener('click', function (event) {
  var pival = document.querySelector('.pival');
  var kival = document.querySelector('.kval');
  var worker = new Worker('pi.js');
  worker.addEventListener('message', function (event) {
    pival.innerHTML = event.data.pi;
    kival.innerHTML = event.data.k;
  });
});
//#endregion

//#region why setInterval won't update the UI at 1000ms interval
document.querySelector('.reason').addEventListener('click', function () {
  var parent = document.querySelector('.showReason');
  var child = document.createElement('h2');
  child.setAttribute('class', 'rsn-display');
  parent.appendChild(child);
  child.innerHTML = displayReason();
  setInterval(function () {
    var flashElem = document.querySelector('.rsn-display');
    flashElem.style.color = flashElem.style.color == 'red' ? 'blue' : 'red';
  }, 3000);
});
function displayReason() {
  return `Initially the value dispalys as 0 for both pi value and counter
    and later gets change to the computed value. The updation of the UI does not happen
    periodically as desired, this is due to the ongoing computation on the worker thread.
    The worker thread has its own event queue. The first interval is fired and caught by the UI thread,
    the other setInterval events get queued up in the event queue but are not dispatched at the worker thread
    is busy computing the value of the PI, which is indeed a heavy calculation`;
}
//#endRegion

//#region update the UI periodically
document.querySelector('.compute-async').addEventListener('click', function () {
    var btn = document.querySelector('.compute-async');
    btn.disabled=true;
  var piELem = document.querySelector('.pival-async');
  var counterELem = document.querySelector('.kval-async');
  var workerAsync = new Worker('piAsync.js');
  workerAsync.addEventListener('message', function (event) {
      if (event.data.k >= 10000000-1) {
        btn.disabled = false;
      }
    piELem.innerHTML = event.data.p;
    counterELem.innerHTML = event.data.k;
  });
});
//#endregion
