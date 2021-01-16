function binarySearch(arr, item){
   let low = 0;
   let higt = arr.length - 1;
   let mid;
   while (low <= higt){
        mid = low + Math.round((higt - low)/2);
        if (item < arr[mid]){
            higt = mid - 1;
        }else if(item > arr[mid]){
            low = mid + 1;
        }else{
            return mid;
        }
      
   }
   return null;
    
}

console.log(binarySearch([1,3,5,7,9, 10], 10));

