/** @format */

var worker;

//start calculation of the PI value
document.querySelector('.start').addEventListener('click', function (event) {
  worker = new Worker('pi.js');
  worker.postMessage('start');
//   autoStart(event);
  //#region styling of the UI to notify the USER about the start of the calculation process
  var startBtn = document.querySelector('.start');
  startBtn.disabled = true;
  var notify = document.createElement('p');
  notify.innerHTML = 'calulation of Pi has begun';
  notify.style.backgroundColor = 'yellow';
  notify.style.height = '50px';
  notify.style.width = '200px';
  notify.style.fontWeight = 'bold';
  event.target.parentElement.appendChild(notify);
  //#endregion
});

//craetion of element and updation in the UI
var updtBtn = document.querySelector('.update');
var notify = document.createElement('p');
notify.style.backgroundColor = 'orange';
notify.style.height = '50px';
notify.style.width = '340px';
notify.style.padding = '2px';
notify.style.fontWeight = 'bold';
//end updation to the UI

//updation of the PI value on the UI on demand
document.querySelector('.update').addEventListener('click', function (e) {
  e.target.parentElement.appendChild(notify);
  if (!worker) {
    notify.innerHTML = 'You need to start the calculation first';
    return;
  }
  worker.postMessage('update');
  worker.addEventListener('message', function (event) {
      if (e.target.className === 'update') {
        notify.innerHTML = event.data.value;
        e.stopImmediatePropagation();
      }
    
  });
});


//Auto display of the UI will work but it will cost the manual update button,
//as both of the autodisplay and manual update listen to the same event
var autoDisplay = document.querySelector('#auto-display');
function autoStart(event) {
  setInterval(() => {
    worker.postMessage('continuousUpdate');
    worker.addEventListener('message', function (e) {
      if (!e || !e.data) {
        return;
      }
      if (e.data.done) {
        event.target.disabled = false;
        worker.truncate();
      }
      autoDisplay.innerHTML = e.data.value;
    });
  }, 1000);
}
