const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

console.log(productSum(array), "expect 12");
// time O(n) | space O(d) 
// n - number of elements
// d - depth of array
function productSum(array, mult = 1) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (typeof element === "number") sum += element;
    else sum += productSum(element, mult + 1);
  }
  console.log(sum)
  return sum * mult;
}
