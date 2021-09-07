const strings = ["abcdcba", "abcdscba"];

strings.forEach((str) =>
  console.log(`${str} is palindrome ${isPalindrome(str)}`)
);

// time O(n) | space O(1)
function isPalindrome(string) {
  let index = 0,
    maxIndex = Math.ceil(string.length / 2);
  while (index <= maxIndex) {
    if (string[index] !== string[string.length - index - 1]) return false;
    index++;
  }
  return true;
}
