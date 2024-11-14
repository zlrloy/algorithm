/*
문제. 문자열 정렬하기 (1)
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
*/

function solution(my_string) {
  const digits = my_string.replace(/[^0-9]/g, "");
  return [...digits].map(Number).sort((a, b) => a - b);
}

console.log(solution("hi12392")); //[1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); //[2, 2, 4, 8]
console.log(solution("abcde0")); //[0]
