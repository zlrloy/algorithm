/*
# 문제
String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

str: 텍스트
return: 중복되지 않은 알파벳 길이 (숫자 반환)

예를 들어,
str = "abcabcabc"
return 은 3
=> 'abc' 가 제일 길기 때문

str = "aaaaa"
return 은 1
=> 'a' 가 제일 길기 때문

str = "sttrg"
return 은 3
=> 'trg' 가 제일 길기 때문
*/

//maxLength
//Case1
const getLengthOfStr = (str) => {
  let maxLength = 0;
  let currentString = "";

  for (let char of str) {
    if (currentString.includes(char)) {
      currentString = currentString.slice(currentString.indexOf(char) + 1);
    }
    currentString += char;
    maxLength = Math.max(maxLength, currentString.length);
  }
  return maxLength;
};

console.log(getLengthOfStr("abcabcabc")); //3
console.log(getLengthOfStr("aaaaa")); //1
console.log(getLengthOfStr("sttrg")); //3
console.log(getLengthOfStr("dodoyoon")); //3

//Case2
const getLengthOfStr2 = (str) => {
  let topLength = 0;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) === -1) {
      arr.push(str[i]);
    } else {
      arr = arr.slice(arr.indexOf(str[i]) + 1);
      arr.push(str[i]);
    }
    if (topLength < arr.length) {
      topLength = arr.length;
    }
    console.log(arr);
  }
  return topLength;
};

//minLength
const getLengthOfShortestStr = (str) => {
  let minLength = Infinity;
  let currentString = "";

  for (let char of str) {
    if (currentString.includes(char)) {
      currentString = currentString.slice(currentString.indexOf(char) + 1);
    }
    currentString += char;
    if (currentString.length < minLength) {
      minLength = currentString.length;
    }
  }
  return minLength;
};

console.log(getLengthOfShortestStr("dodoyoon")); //1
