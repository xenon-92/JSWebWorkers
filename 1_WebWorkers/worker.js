/** @format */

this.addEventListener('message', function (event) {
  console.log(event);
});
var obj = {
  bar: 'bar',
  foo: [1, 2, 3, 4, 5, 6, 67],
};
this.postMessage(obj);
