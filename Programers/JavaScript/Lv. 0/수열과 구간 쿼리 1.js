/*
문제. 수열과 구간 쿼리 1
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
*/

//Case1
function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    while (s <= e) arr[s++]++;
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
); //[1, 3, 4, 4, 4]

//Case2
function solution(arr, q) {
  let answer = [];

  q.map((a) => {
    for (let i = a[0]; i <= a[1]; i++) {
      arr[i] += 1;
    }
  });

  return arr;
}

//Case3
function solution(arr, queries) {
  const N = arr.length;

  for (const [start, end] of queries) {
    for (let i = start; i <= end; i += 1) {
      arr[i] += 1;
    }
  }

  return arr;
}
