const binarySearch  = (arr, find) => {
       let left = arr[0];
       let right = arr.length-1;

       while(left <= right){
            
            const mid = Math.floor((left + right)/2);

            if( arr[mid] == find){
                return mid;
            } else if( arr[mid] < find){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
       }
}


const arr = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
const find = 4;
console.log(binarySearch(arr,find));