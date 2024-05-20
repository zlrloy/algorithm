/*
문제. 문자 개수 세기
알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수,
my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
*/

//Case1
function solution(my_string) {
  const counts = new Array(52).fill(0);
  const alphabets = my_string.match(/[a-zA-Z]/g).join("");

  alphabets.split("").forEach((char) => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      counts[charCode - 65]++;
    } else if (charCode >= 97 && charCode <= 122) {
      counts[charCode - 71]++;
    }
  });

  return counts;
}

console.log(solution("Programmers")); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]

//Case2
function solution(my_string) {
  let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var answer = new Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    answer[alp.indexOf(my_string[i])]++;
  }
  return answer;
}

//Case3
function solution(str) {
  return [...str].reduce((p, c) => (p[c.charCodeAt() - (c === c.toLowerCase() ? 71 : 65)]++, p), Array(52).fill(0));
}
