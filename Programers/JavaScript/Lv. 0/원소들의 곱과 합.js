/*
문제. 원소들의 곱과 합
정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
  const multiple = num_list.reduce((a, b) => a * b);
  const sum = Math.pow(
    num_list.reduce((a, b) => a + b),
    2
  );

  return multiple < sum ? 1 : 0;
}
