/**
 * 1. Loop through for each element
 * 2. Have a pivot point and maintain it such that left side
 * less than the one at pivot point and the other one is on
 * the right of it
 */
function quickSort(arr) {
    let pivot = 0;
    for (let i = 0; i < arr.length; i++) {
        pivot = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[pivot]) {
                [arr[j],arr[pivot]] = [arr[pivot], arr[j]];
                pivot++;
            }
        }   
    }
    return arr;
}