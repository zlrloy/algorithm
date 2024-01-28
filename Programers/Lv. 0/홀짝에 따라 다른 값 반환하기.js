/*
문제. 홀짝에 따라 다른 값 반환하기
양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
*/

//Case1
function solution(n) {
  const numbers = [];

  for (let i = 0; i <= n; i++) {
    numbers.push(i);
  }
  if (n % 2 !== 0) {
    return numbers.filter((num) => num % 2 !== 0).reduce((a, b) => a + b, 0);
  } else {
    return numbers
      .filter((num) => num % 2 === 0)
      .reduce((a, b) => a + b ** 2, 0);
  }
}

console.log(solution(7)); //16
console.log(solution(10)); //220

//Case2
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}

//Case3
function solution(n) {
  const array = Array(n)
    .fill()
    .map((x, idx) => idx + 1);

  return n % 2 === 0
    ? array.reduce((a, b) => (b % 2 === 0 ? a + Math.pow(b, 2) : a), 0)
    : array.reduce((a, b) => (b % 2 === 0 ? a : a + b), 0);
}
