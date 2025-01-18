/*
문제. 마지막 두 원소
정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을,
마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
*/

//Case1
function solution(num_list) {
  let lastElement = num_list[num_list.length - 1];
  let beforeElement = num_list[num_list.length - 2];
  if (lastElement > beforeElement) {
    num_list.push(lastElement - beforeElement);
  } else {
    num_list.push(lastElement * 2);
  }
  return num_list;
}

console.log(solution([2, 1, 6])); //[2, 1, 6, 5]
console.log(solution([2, 7, 5])); //[2, 7, 5, 10]

//Case2
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
