"use strict";
function minByKey(arr, key) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++)
    if ((arr[i][key] || 0) < (min[key] || 0)) min = arr[i];
  return min;
}
let records = [
  { a: 1, b: 4 },
  { a: 3, b: 1 },
  { a: 2 },
  { a: -2, b: 2 },
  { b: 3 },
];
console.log(minByKey(records, "a")); // -> {a: -2, b: 2}
console.log(minByKey(records, "b")); // -> {a: 2};
