/*
문제. 369게임
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
*/

//Case 1
function solution(order) {
  return order
    .toString()
    .split("")
    .filter((digit) => ["3", "6", "9"].includes(digit)).length;
}

console.log(solution(3)); //1
console.log(solution(29423)); //2

//Case 2
function solution(order) {
  return ("" + order).split(/[369]/).length - 1; //369 기준으로 문자열을 나눠 배열로 반환
}
