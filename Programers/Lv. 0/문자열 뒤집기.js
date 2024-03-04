/*
문제. 문자열 뒤집기
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

//Case1
function solution(my_string, s, e) {
  const subString = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  return my_string.slice(0, s) + subString + my_string.slice(e + 1);
}

console.log(solution("Progra21Sremm3", 6, 12));
console.log(solution("Stanley1yelnatS", 4, 10));
