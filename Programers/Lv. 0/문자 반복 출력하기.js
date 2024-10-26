/*
문제. 문자 반복 출력하기
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

//Case1
function solution(my_string, n) {
  const string = [...my_string];
  return string.flatMap((char) => Array(n).fill(char)).join("");
}

console.log(solution("hello", 3)); //"hhheeellllllooo"

//Case2
function solution(my_string, n) {
  return [...my_string].map((v) => v.repeat(n)).join("");
}
