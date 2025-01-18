/*
문제. 배열 만들기 1
정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
*/

//Case1
function solution(n, k) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      result.push(i);
    }
  }
  return result;
}

//Case2
function solution(n, k) {
  return Array.from({ length: n }, (_, index) => index + 1).filter(
    (number) => number % k === 0
  );
}
