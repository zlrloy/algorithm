/*
문제. 홀수 vs 짝수
정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하고 두 값이 같을 경우 그 값을 return하세요.
*/

function solution(num_list) {
  let odd = [];
  let even = [];

  num_list.map((x, i) => (i % 2 === 0 ? odd.push(x) : even.push(x)));

  const oddSum = odd.reduce((a, c) => a + c, 0);
  const evenSum = even.reduce((a, c) => a + c, 0);

  return Math.max(oddSum, evenSum);
}

consolelog(solution([4, 2, 6, 1, 7, 6])); //17
