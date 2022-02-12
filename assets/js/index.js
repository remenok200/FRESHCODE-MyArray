"use strict";

const arr = new MyArray();
const arr2 = new MyArray();
const arr1 = new Array();

arr.push(1, 3, 121);
arr2.push("a", "b");

arr.forEach((currentValue, index) => {
  return console.log(`Под индексом ${index} лежит ${currentValue}`);
});

let testMap = arr.map((currentValue, index, array) => {
  return (array[index] = index);
});
