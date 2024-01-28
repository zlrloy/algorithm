/*
# 문제
숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.
num: 숫자
return: true or false (뒤집은 모양이 num와 똑같은지 여부)

# 풀이
1. 숫자를 문자로 변환한다.
2. 문자열을 나눈다.
3. 뒤집는다.
4. 나눈 문자열을 다시 하나의 문자열로 만든다.
5. 3번과 4번이 일치하면 true 아니면 false를 리턴한다.
*/

const sameReverse = (num) => {
  const str = num.toString().split("").reverse().join("");
  return num == str ? true : false;
};

console.log(sameReverse(-121)); // false
console.log(sameReverse(111)); // true
console.log(sameReverse(1234)); // false
