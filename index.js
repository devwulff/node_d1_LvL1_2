const { numbers, names } = require("./data");
const {
  firstElt,
  lastElt,
  withoutLast,
  withoutFirst,
  posNvar,
  removeElt,
  unique,
  sum,
  randomNum,
  charatUpperCase,
  toUpperCase,
  compareParams,
} = require("./function");

console.log(firstElt(names));
console.log(firstElt(numbers));

console.log(lastElt(names));
console.log(lastElt(numbers));

console.log(withoutLast(names));
console.log(withoutLast(numbers));

console.log(withoutFirst(names));
console.log(withoutFirst(numbers));

console.log(posNvar(names, 2));
console.log(posNvar(numbers, 4));

console.log(removeElt(names, "Simon"));
console.log(removeElt(numbers, 6));

console.log(unique(names));
console.log(unique(numbers));

console.log(randomNum(10, 40));

console.log(charatUpperCase("funktioniert das?"));

console.log(toUpperCase("alles klein geschrieben"));

console.log(compareParams("Test", "t"));
