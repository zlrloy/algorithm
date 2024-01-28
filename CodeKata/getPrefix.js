/*
# 문제
strs은 단어가 담긴 배열입니다.
공통된 시작 단어(prefix)를 반환해주세요.

예를 들어
strs = ['start', 'stair', 'step']
return은 'st'
strs = ['start', 'wework', 'today']
return은 ''
*/

const getPrefix = (strs) => {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
};

const strsA = ["start", "stair", "step"];
const strsB = ["start", "wework", "today"];

const resultA = getPrefix(strsA);
console.log(resultA); //'st'

const resultB = getPrefix(strsB);
console.log(resultB); //''
