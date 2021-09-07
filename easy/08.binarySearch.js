const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 33;

console.log(binarySearch(array, target));

// time O(log(n)) | space O(n*log(n))
// log by 2
// function binarySearch(array, target, startIndex = 0) {
//     // Write your code here.
//     let index = Math.floor(array.length / 2) ;
//     if (array[index] === target) return startIndex + index;
//     if (array.length === 1) return -1;
//     // new arrays
//     const res = array[index] > target  ? binarySearch(array.slice(0,index), target, startIndex) : binarySearch(array.slice(index), target, startIndex + index);
//     return res
// }

// function binarySearch(array, target) {
//   // Write your code here.
//   return binarySearchHealper(array, target, 0, array.length - 1);
// }

// // time O(log(n)) | space O(log(n))
// // log by 2
// function binarySearchHealper(array, target, start, end) {
//   if (start > end) return -1;
//   //   if (end - start === 0) return array[start] === target ? start : -1;

//   const middle = start + Math.floor((end - start) / 2);
//   if (array[middle] === target) return middle;
//   else if (array[middle] < target)
//     return binarySearchHealper(array, target, middle + 1, end);
//   else return binarySearchHealper(array, target, start, middle - 1);
// }

// time O(log(n)) | space O(1)
// log by 2
function binarySearch(array, target) {
  let start = 0,
    end = array.length - 1;
  while (start <= end) {
    const middle = start + Math.floor((end - start) / 2);
    if (array[middle] === target) return middle;
    else if (array[middle] < target) {
        start = middle + 1;
    } else {
        end = middle - 1;
    }
  }
  return -1;
}
