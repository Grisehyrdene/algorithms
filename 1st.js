// binarySearch.

function binarySearch(arr, item){
   let low = 0;
   let hight = arr.length - 1;
   let mid;
   while (low <= hight){
        mid = low + Math.round((hight - low)/2);
        if (item < arr[mid]){
            hight = mid - 1;
        }else if(item > arr[mid]){
            low = mid + 1;
        }else{
            return mid;
        }
      
   }
   return null;
    
}

console.log(binarySearch([1,3,5,7,9, 10], 10));

