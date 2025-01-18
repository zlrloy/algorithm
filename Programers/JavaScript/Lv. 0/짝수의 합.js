/*
문제. 짝수의 합
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/

//Case1
function solution(n) {
  let even = [];
  for (let i = 2; i <= n; i += 2) {
    even.push(i);
  }
  return even.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(10)); //30
console.log(solution(4)); //6

//Case2
function solution(n) {
  let even = 0;
  for (let i = 2; i <= n; i += 2) {
    even += i;
  }
  return even;
}
