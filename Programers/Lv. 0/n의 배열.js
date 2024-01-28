/*
문제. n의 배열
정수 n이 주어질 때 1부터 n까지의 정수를 순서대로 담은 배열을 리턴하도록 solution 함수를 작성해주세요.
*/

function solution(n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(i + 1); //빈칸 채우기
  }
  return answer;
}

console.log(solution(3)); //[1,2,3]
console.log(solution(5)); //[1,2,3,4,5]
