function sumFor(num) {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}
console.log(sumFor([1, 2, 3, 4, 5]));

function sumWhile(num) {
  let total = 0;
  let i = 0;
  while (i < num.length) {
    total += num[i];
    i++;
  }
  return total;
}
console.log(sumWhile([1, 2, 3, 4, 5]));

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  return num[0] + sumRecursion(num.slice(1, num.length));
}
console.log(sumRecursion([1, 2, 3, 4, 5]));

function sumTheSimpleWay(num) {
  return _.reduce(num, function (memo, number) { return memo + number; }, 0);
}
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
