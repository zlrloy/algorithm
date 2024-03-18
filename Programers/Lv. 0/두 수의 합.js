/*
문제. 두 수의 합
0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

학습
- 숫자의 범위가 넓어 '+'나 Number() 함수로는 풀리지 않아 최대치 정수를 안정적으로 나타낼 수 있는 BigInt() 함수로 해결한다.
*/

function solution(a, b) {
  const sum = BigInt(a) + BigInt(b);
  return sum.toString();
}

console.log(solution("582", "734")); //"1316"
console.log(solution("18446744073709551615", "287346502836570928366")); //"305793246910280479981"
console.log(solution("0", "0")); //"0"
