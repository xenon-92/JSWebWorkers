/** @format */

document
  .querySelector('.send-toWorker')
  .addEventListener('click', function (e) {
    var worker = new Worker('worker.js');
    worker.postMessage({ ram: 'ram', lakshman: 'lakshman', sita: 'sita' });
  });
var worker = new Worker('worker.js');
worker.addEventListener('message',function(event){
document.querySelector('.recieve-fromWorker').innerHTML = JSON.stringify(event.data);
});