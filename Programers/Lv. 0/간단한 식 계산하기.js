/*
문제. 간단한 식 계산하기
문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다.
주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
*/

//Case1. 잘못된 풀이
//이 풀이는 보안에 굉장히 취약하다고 한다. 해커가 eval()을 사용하면 임의의 코드를 실행하기가 너무 쉬우니 지양하도록 하자(MDN 참고)
function solution(binomial) {
  return eval(binomial);
}
