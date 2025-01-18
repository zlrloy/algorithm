/*
문제. 공백으로 구분하기 1
단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때,
my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
*/

//Case1
function solution(my_string) {
  let result = my_string.split(/\s+/g);
  return result;
}

console.log(solution("i love you")); //["i", "love", "you"]
console.log(solution("programmers")); //["programmers"]

//Case2
function solution(my_string) {
  return my_string.split(" ");
}
