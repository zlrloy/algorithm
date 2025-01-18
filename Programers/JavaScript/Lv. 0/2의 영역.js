/*
문제. 2의 영역
정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
단, arr에 2가 없는 경우 [-1]을 return 합니다.
*/

function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);
  return arr.includes(2) ? arr.slice(from, end + 1) : [-1];
}

console.log(solution([1, 2, 1, 4, 5, 2, 9])); //[2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); //[2]
console.log(solution([1, 1, 1])); //[-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); //[2, 1, 2, 1, 10, 2]
