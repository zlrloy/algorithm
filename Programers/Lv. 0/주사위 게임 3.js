/*
문제. 주사위 게임 3
1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  const counts = new Map();

  for (const num of dice) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  const sortedCounts = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const [key1, val1] = sortedCounts[0];

  if (val1 === 4) {
    return 1111 * key1;
  } else if (val1 === 3) {
    const key2 = sortedCounts[1][0];
    return (10 * key1 + key2) ** 2;
  } else if (val1 === 2) {
    if (sortedCounts.length === 2) {
      const key2 = sortedCounts[1][0];
      return (key1 + key2) * Math.abs(key1 - key2);
    } else {
      const [key2, key3] = [sortedCounts[1][0], sortedCounts[2][0]];
      return key2 * key3;
    }
  } else {
    return Math.min(...dice);
  }
}

console.log(solution(2, 2, 2, 2)); //2222
console.log(solution(4, 1, 4, 4)); //1681
console.log(solution(6, 3, 3, 6)); //27
console.log(solution(2, 5, 2, 6)); //30
console.log(solution(6, 4, 2, 5)); //2
