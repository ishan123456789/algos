/**
 * Based on idea that single item array is always sorted
 * Keep splitting and merge the sorted array
 */
function mergeSortedArray(arr1, arr2) {
    const newArr = [];
    const count = arr1.length + arr2.length;
    let i = 0, j =0, k=0;
    while(k<count-1) {
        if(!arr2[j] || arr1[i] < arr2[j]) {
            newArr[k] = arr1[i];
            i++;
            k++;
        }
        if (!arr1[i] || arr1[i] > arr2[j] ) {
            newArr[k] = arr2[j];
            j++;
            k++;
        }
    }
    return newArr;
}
function mergeSort(arr) {
    if(arr.length === 1) {
        return mergeSortedArray(left, right);
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid + 1));
}
console.log(mergeSortedArray([5,6,7,1,4,9,22]));