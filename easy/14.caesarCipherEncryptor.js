const string = "xyz",
  key = 2;

console.log(caesarCipherEncryptor(string, key));

// time O(n) | space O(n)
function caesarCipherEncryptor(string, key) {
  const codes = [];
  for (let index = 0; index < string.length; index++) {
    codes.push(caesarCipherEncryptorHelper(string.charCodeAt(index) + key));
  }
  return String.fromCharCode(...codes);
}

function caesarCipherEncryptorHelper(code) {
  const min = 97;
  const max = 122;
  const step = max - min + 1;
  while (code > max) {
    code = code - step;
  }

  return code;
}
