/** @format */

document.querySelector('.displayPi').addEventListener('click', function () {
  var worker = new Worker('pi.js');
  worker.addEventListener('message', function (event) {
    var elemPI = document.createElement('p');
    var elemK = document.createElement('p');
    elemPI.innerHTML = event.data.pi;
    elemK.innerHTML = event.data.k;
    document.body.appendChild(elemPI);
    document.body.appendChild(elemK);
    //Terminating the worker thread after the worker thread has
    //reached 10000 iteration
    worker.terminate();
  });
});
