// Selection sort

function findSmallest(arr){
    let smallest = arr[0];
    let smallestIndex = null;

    for (let x = 1; x < arr.length; x++){
        if (arr[x] < smallest){
            smallest = arr[x];
            smallestIndex = x;
        }
    }
    return smallestIndex;
}

function selectionSort(arr){
    let newArr = [];
    let smallestIndex = null;
    for(let x = 0; x < arr.length; x++){
       smallestIndex = findSmallest(arr);
       newArr.push(arr[smallestIndex]);
       arr.splice(smallestIndex, 1);
       x--;
    }
    
    
    return newArr;
}


console.log(selectionSort([32, 3,5, -1, -22, 42]));
