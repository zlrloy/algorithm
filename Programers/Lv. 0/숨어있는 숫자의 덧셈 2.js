/*
문제. 숨어있는 숫자의 덧셈 (2)
문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

//Case1
function solution(my_string) {
  return my_string.split(/[a-zA-Z]/g).reduce((acc, curr) => +acc + +curr, 0);
}

console.log(solution("aAb1B2cC34oOp")); //37
console.log(solution("1a2b3c4d123Z")); //133

//Case2
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
