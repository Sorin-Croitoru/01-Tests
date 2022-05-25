//easier method is to bruteforce every volume, but that's 

// use a 2d pointer (left, right) and move the lowest height index
//var maxArea = function(height) {
//     let i=0, j=height.length-1, currentSolution = 0
//     while (i< j && j> i){
//         const currentVolume = ((j-i) * Math.min(height[i],height[j]))
//         currentVolume > currentSolution ? currentSolution = currentVolume : currentSolution
//         height[i] < height[j] ? i++ : j--
//     }
//     return currentSolution
// };
//LE apparently Math is faster than an comparison

function maxArea(height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while(start < end) {
    const currentArea = Math.min(height[start], height[end]) * (end - start);
    maxArea = Math.max(currentArea, maxArea);

    if(height[start] < height[end]){
      start++
    } else {
      end--
    }
  }
  return maxArea;
}
