/*
문제. 문자열이 몇 번 등장하는지 세기
문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

풀이
1. for문으로 myString을 pat의 길이만큼 자른다.
2. pat과 일치하는 단어의 갯수를 반환한다.

학습
- filter는 배열에서 주어진 함수의 조건을 충족하는 모든 요소를 새로운 배열로 반환하고 find는 조건을 충족하는 첫 번째 요소를 반환하기 때문에 filter를 사용한다.
*/

//Case1
function solution(myString, pat) {
  let array = [];
  for (let i = 0; i < myString.length; i++) {
    array.push(myString.slice(i, i + pat.length));
  }
  return array.filter((word) => word === pat).length;
}

console.log(solution("banana", "ana")); //2
console.log(solution("aaaa", "aa")); //3

//Case2
function solution(myString, pat) {
  const regex = new RegExp(`(?=${pat})`, "g");
  return myString.match(regex)?.length || 0;
}
