/*
문제. 정수를 나선형으로 배치하기
양의 정수 n이 매개변수로 주어집니다.
n × n 배열에 1부터 n2 까지 정수를 인덱스[0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(n) {
  let ans = Array.from({ length: n }, () => []);

  let rowMin = 1,
    rowMax = n - 1;
  let colMin = 0,
    colMax = n - 1;
  let row = (col = 0);

  let dir = "r";
  for (let i = 1; i <= n * n; i++) {
    ans[row][col] = i;
    if (dir === "r")
      if (col === colMax) colMax--, row++, (dir = "b");
      else col++;
    else if (dir === "l")
      if (col === colMin) colMin++, row--, (dir = "t");
      else col--;
    else if (dir === "b")
      if (row === rowMax) rowMax--, col--, (dir = "l");
      else row++;
    else if (dir === "t")
      if (row === rowMin) rowMin++, col++, (dir = "r");
      else row--;
  }
  return ans;
}

console.log(solution(4)); //[[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
console.log(solution(5)); //[[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
