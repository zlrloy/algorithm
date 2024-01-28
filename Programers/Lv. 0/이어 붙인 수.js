/*
문제. 이어 붙인 수
정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
입출력 예
num_list: [3, 4, 5, 2, 1] result: 393(351+42)
*/

//Case1
function solution(num_list) {
  const odd = parseInt(num_list.filter((num) => num % 2 === 1).join(""));
  const even = parseInt(num_list.filter((num) => num % 2 === 0).join(""));

  return odd + even;
}

console.log(solution([3, 4, 5, 2, 1])); //393
console.log(solution([5, 7, 8, 3])); //581

//Case2
function solution(num_list) {
  let result = 0;
  let odd = "";
  let even = "";

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 1) {
      odd += num_list[i].toString();
    } else {
      even += num_list[i].toString();
    }
  }
  //'+'기호는 문자열 등의 다른 유형의 데이터를 숫자로 변환하는 연산자이다.
  result = +odd + +even;
  return result;
}
