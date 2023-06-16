interface Row {
  [key: string]: number;
}

function minByKey(arr: Row[], key: string): Row | undefined {
  let min: Row | undefined = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (key in arr[i]) {
      if (min === undefined || arr[i][key]! < min[key]!) {
        min = arr[i];
      }
    }
  }
  return min;
}

let records: Row[] = [
  { a: 1, b: 4 },
  { a: 3, b: 1 },
  { a: 2 },
  { a: -2, b: 2 },
  { b: 3 },
  { b: -1 },
  { a: -5 },
];

console.log(minByKey(records, "a")); // -> {a: -2, b: 2}
console.log(minByKey(records, "b")); // -> {a: 3, b: 1}
