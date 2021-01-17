"use strict";

// Selection sort
function findSmallest(arr) {
  var smallest = arr[0];
  var smallestIndex = 0;

  for (var x = 1; x < arr.length; x++) {
    if (arr[x] < smallest) {
      smallest = arr[x];
      smallestIndex = x;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  var newArr = [];
  var smallestIndex = null;
  var value = null; // arr = [32, 3,5, -1, -22, 42]

  for (var x = 0; x < arr.length; x++) {
    arr.splice(x, 1);
    x--;
  }

  return arr;
}

console.log(selectionSort([32, 3, 5, -1, -22, 42]));