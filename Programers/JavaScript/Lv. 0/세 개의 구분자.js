/*
문제. 세 개의 구분자
임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.
예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.
문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.

학습
- includes를 사용하니 코드가 너무 길어졌다. result를 선언하여 간결성을 추가했다.
- /[a-c]/g는 "a", "b", "c" 중 하나를 찾는데 사용되기 때문에 단일 문자만 매치하여 전역적으로 모든 매치를 찾는다.
  /[a-c]+/는 "a", "b", "c" 중 하나 이상의 연속된 문자열을 찾아 문자열을 쪼개기 때문에 더 올바른 표현이라고 한다.
*/

function solution(myStr) {
  const result = myStr.split(/[a-c]+/).filter(Boolean);
  return result.length ? result : ["EMPTY"];
}

console.log(solution("baconlettucetomato")); //["onlettu", "etom", "to"]
console.log(solution("abcd")); //["d"]
console.log(solution("cabab")); //["EMPTY"]
