// Average pair
// There are two arguments on array and other the average 
// Example: averagePair([1,2,3,4,5,6], 3) => true, averagePair([1,2,3,4,5,6], 5) => false
// Space complexity O(1) and  Time Complexity O(n)
function averagePair(arr, avg){
    let start = 0;
    let end = arr.length;
    while(start < end) {
        const calculatedAverage = (arr[start] + arr[end]) / 2;
        if(calculatedAverage === avg) return true;
        if(calculatedAverage < avg) start++;
        else end--;
    }
    return false; 
}
