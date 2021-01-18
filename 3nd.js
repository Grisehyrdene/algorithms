// Quick sort.

function qSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[0];
    const leftPart = [];
    const rightPart = [];
      
   for (let i = 1; i < arr.length; i++){
        (pivot > arr[i]) ? leftPart.push(arr[i]) : rightPart.push(arr[i]);
   }
    return qSort(leftPart).concat(pivot).concat(qSort(rightPart));
  }

console.log(qSort([-1, 22, 321, 3,56,2,76,2,35]));
