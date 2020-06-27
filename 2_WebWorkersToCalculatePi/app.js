/** @format */

//#region append
document.querySelector('.alert').addEventListener('click', function (event) {
  var parent = document.querySelector('.alert-section');
  var child = document.createElement('p');
  child.innerHTML = `button clicked, so added a paragraph to the div at ${new Date().toString()}`;
  parent.appendChild(child);
});
//#endregion

//#region
document
  .querySelector('.calculate')
  .addEventListener('click', function (event) {
    var btn = document.querySelector('.calculate');
    btn.disabled=true;
    var worker = new Worker('pi.js');
    worker.addEventListener('message', function (event) {
      document.querySelector('.piValue').innerHTML = event.data.pi;
      document.querySelector('.counter').innerHTML = event.data.k;
      btn.disabled = false;
    });
  });
//#endregion
