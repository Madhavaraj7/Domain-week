function reverseString(str, i = str.length - 1, result="") {
  if (i < 0) {
    return "";
  }

  result += str[i];

  return result + reverseString(str,--i);
}

console.log(reverseString("HelloMadhav"));
