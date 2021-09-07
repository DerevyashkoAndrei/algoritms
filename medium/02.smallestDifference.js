const a = [-1, 5, 10, 20, 28, 3],
  b = [26, 134, 135, 15, 17];

console.log(findDifference(a, b));

// time O(n*m) | space O(n)
// function findDifference(arrA, arrB) {

//   const differences = findDifferenceCreateDifferences(arrA,arrB);

//   let smallestDifference = differences[0];

//   for (let index = 1; index < differences.length; index++) {
//     const element = differences[index];
//     if (smallestDifference.differences > element.differences)
//       smallestDifference = element;
//   }
//   return presentResult(findSmaller(differences))
// }
// function findDifferenceCreateDifferences(arrA, arrB) { // time O(n*m) | space O(n)
//   const differences = [];

//   for (let i = 0; i < arrA.length; i++) {
//     const elementA = arrA[i];
//     differences[i] = null;

//     for (let j = 0; j < arrB.length; j++) {
//       const elementB = arrB[j];
//       if (
//         differences[i] === null ||
//         differences[i].differences > Math.abs(elementA - elementB)
//       ) {
//         differences[i] = {
//           a: elementA,
//           b: elementB,
//           differences: Math.abs(elementA - elementB),
//         };
//       }
//     }
//   }

//   return differences;
// }

// time O(n*log(n) +m*log(m)) | space O(1)
function findDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}

function difference(a, b) {
  return Math.abs(a - b);
}

function findSmaller(differences) {
  let smallestDifference = differences[0];
  for (let index = 1; index < differences.length; index++) {
    const element = differences[index];
    if (smallestDifference.differences > element.differences)
      smallestDifference = element;
  }

  return smallestDifference;
}

function presentResult(smaller) {
  return [smaller.a, smaller.b];
}
