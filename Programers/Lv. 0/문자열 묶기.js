/*
문제. 문자열 묶기
문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
*/

//Case1
function solution(strArr) {
  const obj = {};
  strArr.forEach((x, i) => {
    obj[x.length] = obj[x.length] + 1 || 1;
  });
  return Math.max(...Object.values(obj));
}

console.log(solution(["a", "bc", "d", "efg", "hi"])); //2

//Case2
function solution(strArr) {
  let ans = Array(31).fill(0);
  for (let s of strArr) ans[s.length]++;
  return Math.max(...ans);
}

//Case3
function solution(strArr) {
  return Math.max(
    ...Array(31)
      .fill(0)
      .map((_, i) => strArr.map((v) => v.length).filter((v) => v == i).length)
  );
}
