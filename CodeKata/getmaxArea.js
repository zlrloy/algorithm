/*
# 문제
인자인 height는 숫자로 이루어진 배열입니다.
그래프로 생각한다면 y축의 값이고, 높이 값을 갖고 있습니다.

아래의 그래프라면 height 배열은 [1, 8, 6, 2, 5, 4, 8, 3, 7] 입니다.

저 그래프에 물을 담는다고 생각하고, 
물을 담을 수 있는 가장 넓은 면적의 값을 반환해주세요.

## 가정
배열의 길이는 2이상입니다.

![](https://storage.googleapis.com/replit/images/1555380144403_97221ca23fbb92beaae5b6c800ceb5c8.pn)
*/

//Case1
function getMaxArea(height) {
  let maxArea = 0;

  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      let h = Math.min(height[left], height[right]);
      let w = right - left;
      let area = h * w;

      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

console.log(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49

//Case2
function getMaxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    const area = h * w;

    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
