# Algorithm Study with JavaScript

### 규칙

- 플랫폼: 프로그래머스
- 언어: JavaScript
- 일정: 매주 4일 이상
- 문제 제출: 정답률 높은 순으로 문제를 풀고 GitHub 레포지토리에 제출

<br><br>

### 파일 및 디렉토리 구조

- 각 문제는 `문제 제목.js` 형식으로 저장
- 예시: `문자열 곱하기.js`

<br><br>

### 문제 풀이 예시

```javascript
/*
문제. 문자열 곱하기
문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, k) {
  return my_string.repeat(k);
}

//테스트 케이스
console.log(solution("string", 3)); //"stringstringstring"
console.log(solution("love", 5)); //"lovelovelovelovelove"
```
