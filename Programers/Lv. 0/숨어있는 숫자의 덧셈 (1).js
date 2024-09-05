/*
문제. 숨어있는 숫자의 덧셈 (1)
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

//Case1
function solution(my_string) {
  const numbers = [...my_string].filter((i) => !isNaN(i)).map(Number);

  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution("aAb1B2cC34oOp")); //10
console.log(solution("1a2b3c4d123")); //16

//Case2
function solution(my_string) {
  return [...my_string].reduce((acc, cur) => (Number(cur) ? +acc + +cur : acc), 0);
}
