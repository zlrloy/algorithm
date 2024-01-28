/*
# 문제
`nums`는 숫자로 이루어진 배열입니다. 
가장 자주 등장한 숫자를 `k` 개수만큼 return해주세요.

nums = [1,1,1,2,2,3],
k = 2
return [1,2]

nums = [1]
k = 1
return [1]
*/

function topK(nums, k) {
  const counts = {};

  nums.forEach((num) => (counts[num] = (counts[num] || 0) + 1));

  return Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a])
    .slice(0, k)
    .map(Number);
}

console.log(topK([1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topK([1], 1)); // [1]
