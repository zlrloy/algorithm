/*
문제. 세로 읽기
문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
*/

//Case1
function solution(my_string, m, c) {
  let result = "";

  for (i = c - 1; i < my_string.length; i += m) {
    result += my_string[i];
  }

  return result;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); //"happy"
console.log(solution("programmers", 1, 1)); //"programmers"

//Case2
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}
