const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

console.log(threeNumberSum(array, targetSum));

// time O(n^3) | space O(r) | r - number of results
// function threeNumberSum(array, targetSum) {
//   // Write your code here.
//   const variants = [];

//   for (let i = 0; i < array.length - 2; i++) {
//     for (let j = i + 1; j < array.length - 1; j++) {
//       for (let k = j + 1; k < array.length ; k++) {
//         if (array[i] + array[j] + array[k] === targetSum) {
//             variants.push(
//                 sortVariant(array[i], array[j], array[k])
//             );
//         }
//       }
//     }
//   }

//   return variants;
// }

// time O(n^2) | space O(n + r)
function threeNumberSum(array, targetSum) {
  const variants = [];

  const map = createMap(array);

  for (const key in map) {
    const element = +key;
    map[key]--;

    for (const key2 in map) {
      if (!map[key2]) continue;
      const element2 = +key2;
      map[key2]--;
      const element3 = +targetSum - element - element2;
      if (map[element3]) {
        const newVariant = sortVariant(element, element2, element3);
        if (!existVariant(variants, newVariant)) variants.push(newVariant);
      }
      map[key2]++;
    }
    map[key]++;
  }

  return variants;
}

function createMap(array) {
  const map = {};
  for (const number of array) {
    if (map[number]) map[number]++;
    else map[number] = 1;
  }
  return map;
}

function existVariant(variants, variant) {
  return variants.some((e) =>
    e.every((_, index, v) => v[index] === variant[index])
  );
}

function sortVariant(...values) {
  return values.sort((a, b) => (a > b ? 1 : -1));
}

// O(n^2) time | O(n) space
// function threeNumberSum(array, targetSum) {
//   array.sort((a, b) => a - b);
//   const triplets = [];
//   for (let i = 0; i < array.length - 2; i++) {
//     let left = i + 1;
//     let right = array.length - 1;
//     while (left < right) {
//       const currentSum = array[i] + array[left] + array[right];
//       if (currentSum === targetSum) {
//         triplets.push([array[i], array[left], array[right]]);
//         left++;
//         right--;
//       } else if (currentSum < targetSum) {
//         left++;
//       } else if (currentSum > targetSum) {
//         right--;
//       }
//     }
//   }
//   return triplets;
// }
