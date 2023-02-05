
var arr = [];
do {
  var a = prompt('сахраните любое значение');
  if (!a) {
    break;
  }
  var b = a.split(", ");
  if (b[0] == "add") {
    arr.push(b[1]);
  }
  if (b[0] == "del") {
    const i = arr.findIndex((amr) => amr == b[1]);
    if (i + 1) {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
} while (b[0] !== "stop");



