/*
# 문제
reverse 함수에 정수인 숫자를 인자로 받습니다. 그 숫자를 뒤집어서 return해주세요.
x: 숫자, return: 뒤집어진 숫자를 반환
*/

const reverse = (x) => {
  const string = String(x);
  const newArr = Array.from(string);

  if (newArr[0] === "-") {
    let arr = newArr.shift();
    newArr.reverse();
    newArr.unshift(arr);
    let str = newArr.join("");
    return parseInt(str);
  } else {
    newArr.reverse();
    let str = newArr.join("");
    return parseInt(str);
  }
};

console.log(reverse(1234)); //4321
console.log(reverse(-1234)); //-4321
console.log(reverse(1230)); //321
