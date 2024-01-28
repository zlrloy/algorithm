/*
문제. 특정한 문자를 대문자로 바꾸기
영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

//Case1
function solution(my_string, alp) {
  const stringArray = Array.from(my_string);

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === alp) {
      stringArray[i] = stringArray[i].toUpperCase();
    }
  }
  return stringArray.join("");
}

console.log(solution("programmers", "p")); //"Programmers"
console.log(solution("lowercase", "x")); //"lowercase"

//Case2
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
