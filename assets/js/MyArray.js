"use strict";

function MyArray() {
  this.length = 0;
}

function MyArrayPrototype() {
  MyArray.isMyArray = function (arg) {
    return arg instanceof MyArray ? true : false;
  };

  this.push = function (...values) {
    for (let i = 0; i < values.length; i++) {
      this[this.length++] = values[i];
    }
    return this.length;
  };

  this.pop = function () {
    let tmp = this[--this.length];
    delete this[this.length];
    return tmp;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this.map = function (callback) {
    const tmp = new MyArray();
    for (let i = 0; i < this.length; i++) {
      tmp.push(this[i]);
      callback(tmp[i], i, tmp);
    }
    return tmp;
  };

  this.unshift = function (...value) {
    const tmp = new MyArray();
    tmp.push(...value);
    this.length += value.length;
    for (let i = 0; i < this.length - 1; i++) {
      tmp.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
      this[i] = tmp[i];
    }
    return this.length;
  };

  this.shift = function () {
    let first = this[0];
    let last = this[this.length - 1];
    this[0] = last;
    this[this.length - 1] = first;
    this.pop();
    return first;
  };

  this.reverse = function () {
    for (let i = 0; i < this.length / 2; i++) {
      let tmp = this[i];
      this[i] = this[this.length - i - 1];
      this[this.length - i - 1] = tmp;
    }
  };

  this.concat = function (array) {
    const tmp = new MyArray();
    for (let i = 0; i < this.length; i++) {
      tmp.push(this[i]);
    }
    for (let i = 0; i < array.length; i++) {
      tmp.push(array[i]);
    }
    return tmp;
  };
}

MyArray.prototype = new MyArrayPrototype();