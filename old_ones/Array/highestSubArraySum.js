// Kadane's algorithim
/**
 O(n)
 Continue looping if the total sum is 0 then neglect the sum
 */
 // maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 var kadane = function(arr){
    let cSum = 0, maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++) {
      cSum = Math.max(cSum + arr[i], 0);
      maxSum = Math.max(cSum, maxSum);
    }
    return Math.max(maxSum, 0);
  }

/**
 * For circular sequence we find maxSum of non contributing ones and then subtract it from the total sum
 * [4,3,-1,2,-9,3]
 * Sum would be 3+ 4+3+(-1)+2 = 11
 * kodane([-4,-3,1,-2,9,-3]) returns 9;
 * totalSum of elements above = 2
 * finalResult = totalSum + kodane(negatedArray) = 11;
 */
var findMaxSum = function(arr) {
    const total =0;
    const nonContributing = kodane(arr.map(i => {total+=i; return -i}));
    return total + nonContributing;
}