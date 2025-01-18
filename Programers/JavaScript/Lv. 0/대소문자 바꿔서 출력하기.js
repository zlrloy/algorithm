/*
문제. 대소문자 바꿔서 출력하기
영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
*/

//Case1
function toggleCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(toggleCase("aBcDeFg")); //"AbCdEfG"
console.log(toggleCase("HelloWorld")); //"hELLOwORLD"

//Case2
let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  toggle = "";
  for (let i of str) {
    if (i == i.toUpperCase()) {
      toggle += i.toLowerCase();
    } else {
      toggle += i.toUpperCase();
    }
  }
  console.log(toggle);
});
