/*
문제. 조건 문자열
두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
*/

function solution(ineq, eq, n, m) {
  if (
    (ineq === ">" && eq === "=" && n >= m) ||
    (ineq === "<" && eq === "=" && n <= m) ||
    (ineq === ">" && eq === "!" && n > m) ||
    (ineq === "<" && eq === "!" && n < m)
  ) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution("<", "=", 20, 50)); //1
console.log(solution(">", "!", 41, 78)); //0
