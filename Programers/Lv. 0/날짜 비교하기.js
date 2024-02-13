/*
문제. 날짜 비교하기
정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.
만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.
*/

//Case1
function solution(date1, date2) {
  //JavaScript의 Date 객체에서 month는 0부터 11까지의 값을 가지므로 날짜를 생성할 때 주어진 값에서 1을 빼줌.
  const firstDate = new Date(date1[0], date1[1] - 1, date1[2]);
  const secondDate = new Date(date2[0], date2[1] - 1, date2[2]);

  return firstDate.getTime() < secondDate.getTime() ? 1 : 0;
}

//Case2
function solution(date1, date2) {
  return new Date(date1) < new Date(date2) ? 1 : 0;
}
