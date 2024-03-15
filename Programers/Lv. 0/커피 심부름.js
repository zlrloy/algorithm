/*
문제. 커피 심부름
팀의 막내인 철수는 아메리카노와 카페 라테만 판매하는 카페에서 팀원들의 커피를 사려고 합니다. 아메리카노와 카페 라테의 가격은 차가운 것과 뜨거운 것 상관없이 각각 4500, 5000원입니다.
각 팀원에게 마실 메뉴를 적어달라고 하였고, 그 중에서 메뉴만 적은 팀원의 것은 차가운 것으로 통일하고 "아무거나"를 적은 팀원의 것은 차가운 아메리카노로 통일하기로 하였습니다.
각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 카페에서 결제하게 될 금액을 return 하는 solution 함수를 작성해주세요.

풀이
1. 배열에서 문자열 americano, anything가 포함하면 4500, cafelatte가 포함하면 5000을 반환하는 변수 선언
2. 위의 변수를 reduce로 합산
*/

function solution(order) {
  const menuPrice = order.map((menu) =>
    menu.includes("cafelatte") ? 5000 : 4500
  );
  return menuPrice.reduce((acc, cur) => acc + cur, 0);
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
); //19000
console.log(solution(["americanoice", "americano", "iceamericano"])); //13500
