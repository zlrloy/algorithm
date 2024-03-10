/*
문제. A 강조하기
문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고,
"A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

학습
- replace()는 문자열에서 첫 번째로 일치하는 패턴을 대체하고, replaceAll()은 모든 일치하는 패턴을 대체한다.
  따라서 정규표현식 대신 replaceAll() 함수로 대체 가능하다. replaceAll("a", "A")
*/

function solution(myString) {
  return myString.toLowerCase().replace(/a/g, "A");
}

console.log(solution("abstract algebra")); //"AbstrAct AlgebrA"
console.log(solution("PrOgRaMmErS")); //"progrAmmers"
