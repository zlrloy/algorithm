/*
문제. 글자 지우기
문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

풀이.
1. index를 순회하여
2. indices에 포함하는 index는 필터로 거르고
3. 나머지만 문자열로 출력한다.
*/

//Case1
function solution(my_string, indices) {
  return [...my_string]
    .map((a, i) => (indices.includes(i) ? 0 : a))
    .filter((el) => el !== 0)
    .join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); //"programmers"

//Case2
function removeIndicesFromString(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join("");
}
