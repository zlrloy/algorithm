/*
문제. 조건에 맞게 수열 변환하기 3
정수 배열 arr와 자연수 k가 주어집니다.
만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.
*/

//Case1
function solution(arr, k) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = k % 2 !== 0 ? arr[i] * k : arr[i] + k;
    result.push(value);
  }
  return result;
}

console.log(solution([1, 2, 3, 100, 99, 98], 3)); //[3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); //[3, 4, 5, 102, 101, 100]

//Case2. 중괄호를 생략하면 return도 생략 가능하다.
const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));

//Case3.
function solution(arr, k) {
  if (k % 2 !== 0) {
    return arr.map((x) => x * k);
  } else if (k % 2 === 0) {
    return arr.map((x) => x + k);
  } else {
    return false;
  }
}
