/*
문제. 그림 확대
직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때, 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
*/

//Case1
function solution(picture, k) {
  const tempArr = picture.map((x) =>
    x
      .split("")
      .map((x1) => x1.repeat(k))
      .join("")
  );

  const newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    for (let j = 0; j < k; j++) {
      newArr.push(tempArr[i]);
    }
  }

  return newArr;
}

console.log(solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."], 2)); //["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]
console.log(solution(["x.x", ".x.", "x.x"], 3)); //["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]

//Case2
function solution(picture, k) {
  let result = [];

  picture.map((v) => {
    const cur = [...v].map((c) => c.repeat(k)).join("");
    for (let i = 0; i < k; i++) result.push(cur);
  });

  return result;
}

//Case3
function solution(picture, k) {
  var answer = [];

  picture.forEach((line) => {
    const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), "");

    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}
