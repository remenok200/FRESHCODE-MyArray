'use strict';

const arr = new MyArray();
const arr2 = new MyArray();
const arr1 = new Array();

arr.push(1);
arr.push(3);
arr.push(121);
arr2.push('a');
arr2.push('b');

arr.forEach(function callbackfn(currentValue, index, array) {
    return console.log(`Под индексом ${index} лежит ${currentValue}`);
});

let testMap = arr.map(function callbackfn(currentValue, index, array) {
    return array[index] = index;
});