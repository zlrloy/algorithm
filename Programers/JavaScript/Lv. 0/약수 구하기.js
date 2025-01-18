/*
문제. 약수 구하기
정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

console.log(solution(24)); //[1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(24)); //[1, 29]
