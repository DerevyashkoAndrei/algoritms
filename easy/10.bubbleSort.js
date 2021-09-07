const array = [4, 3, 2, 10, 12, 5, 6, 32, 1, 55];

console.log(bubleSort(array))

// time O(n^2) | space O(1) if not coppy array 
function bubleSort(array) {
  const arrayCopy = array.map((e) => e);

  let changed = false;

  do {
    changed = false;
    for (let index = 1; index < arrayCopy.length; index++) {
      if (arrayCopy[index - 1] > arrayCopy[index]) {
        changed = true;
        let a = arrayCopy[index - 1];
        arrayCopy[index - 1] = arrayCopy[index];
        arrayCopy[index] = a;
      }
    }
  } while (changed);

  return arrayCopy;
}

// time O(n^2 / 2) | space O(1) if not coppy array 
// function bubleSort(array) {
//   const arrayCopy = array.map((e) => e);

//   let changed = false;
//   let step = 0;

//   do {
//     changed = false;
//     for (let index = 1; index < arrayCopy.length - step; index++) {
//       if (arrayCopy[index - 1] > arrayCopy[index]) {
//         changed = true;
//         let a = arrayCopy[index - 1];
//         arrayCopy[index - 1] = arrayCopy[index];
//         arrayCopy[index] = a;
//       }
//     }
//     step++;
//   } while (changed);

//   return arrayCopy;
// }
