/*
문제. 간단한 식 계산하기
문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다.
주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
*/

//Case1. 잘못된 풀이
//이 풀이는 보안에 굉장히 취약하다고 한다. 해커가 eval()을 사용하면 임의의 코드를 실행하기가 너무 쉬우니 지양하도록 하자(MDN 참고)
//function solution(binomial) { return eval(binomial); }
//이 풀이도 간단하고 짧은 코드를 제공하지만 보안을 고려할 때 사용하는 것은 권장되지 않는다. 사용자 입력을 직접 코드로 실행하는 것은 보안 취약점을 남겨둘 수 있으니 안전하지 않은 환경에서 사용하는 것은 위험할 수 있다.
//function solution(binomial) { return new Function(`return ${binomial}`)(); }

//Case2
function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  const operlandA = parseInt(a);
  const operlandB = parseInt(b);

  if (op === "+") {
    return operlandA + operlandB;
  } else if (op === "-") {
    return operlandA - operlandB;
  } else if (op === "*") {
    return operlandA * operlandB;
  }
}

console.log(solution("43 + 12")); //55
console.log(solution("0 - 7777")); //-7777
console.log(solution("40000 * 40000")); //1600000000
