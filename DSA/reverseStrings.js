function reverseString(str, i = str.length - 1, result = "") {
  if (i < 0) {
    return "";
  }

  result += str[i];

  return result + reverseString(str, --i);
}

console.log(reverseString("HelloMadhav"));

function factorial(n) {
  if (n < 2) {
    return n;
  }

  return n * factorial(n - 1);
}
console.log(factorial(4));
