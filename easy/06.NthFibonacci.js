const fibStore = [0, 1];

// time O(n) | space O(n)
function getNthFib(n) {
  if (n < fibStore.length) return fibStore[n];
  let m = fibStore[fibStore.length - 1],
    mm = fibStore[fibStore.length - 2];

  n = n - fibStore.length;
  do {
    const newValue = m + mm;
    mm = m;
    m = newValue;
    fibStore.push(newValue);
    n--;
  } while (n >= 0);

  return fibStore[fibStore.length - 1];
}

// time O(n) | space O(1)
// function getNthFib(n) {
//   const lastTwo = [0, 1];
//   let counter = 3;
//   while (counter <= n) {
//     const nextFib = lastTwo[0] + lastTwo[1];
//     lastTwo[0] = lastTwo[1];
//     lastTwo[1] = nextFib;
//     counter++;
//   }
//   return n > 1 ? lastTwo[1] : lastTwo[0];
// }

// console.log(getNthFib(0), fibStore)
// console.log(getNthFib(1), fibStore)
// console.log(getNthFib(2), fibStore)
// console.log(getNthFib(3), fibStore)
console.log(getNthFib(4), fibStore);
console.log(getNthFib(10), fibStore);
console.log(getNthFib(11), fibStore);
console.log(getNthFib(12), fibStore);
console.log(getNthFib(5), fibStore);
