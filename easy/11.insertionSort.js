const array = [8, 5, 2, 9, 5, 6, 3];

console.log(insertionSort(array))

// time O(n^2) | space O(1) without coppy array
function insertionSort(array) {
  const resultArray = [];
  let swap;

  for (let index = 0; index < array.length; index++) {
    resultArray.push(array[index]);

    for (let index2 = resultArray.length - 1; index2 > 0; index2--) {
      if (resultArray[index2] < resultArray[index2 - 1]) {
        swap = resultArray[index2];
        resultArray[index2] = resultArray[index2 - 1];
        resultArray[index2 - 1] = swap;
      }
    }
  }

return resultArray;
}
