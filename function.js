function firstElt(arr) {
  return arr[0];
}

function withoutLast(arr) {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
}

function lastElt(arr) {
  return arr[arr.length - 1];
}

function withoutFirst(arr) {
  const newArr = [...arr];
  newArr.shift();
  return newArr;
}

function posNvar(arr, n) {
  if (n == -1 || n >= arr.length) return arr[arr.length - 1];
  return arr[n];
}

function removeElt(arr, n) {
  return arr.filter((elt) => {
    return elt != n;
  });
}

const unique = (arr) => {
  return [...new Set(arr)];
};

const sum = (arr) => {
  return arr.reduce((pv, cv) => pv + cv, 0);
};

const randomNum = (i, n) => {
  return Math.floor(Math.random() * (i - n) + n);
};

const charatUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const toUpperCase = (string) => {
  return string.toUpperCase();
};

const compareParams = (i, n) => {
  return i.charAt(i.length - 1) == n;
};

// LvL1_3

module.exports = {
  firstElt,
  withoutLast,
  lastElt,
  withoutFirst,
  posNvar,
  removeElt,
  unique,
  sum,
  randomNum,
  charatUpperCase,
  toUpperCase,
  compareParams,
};
