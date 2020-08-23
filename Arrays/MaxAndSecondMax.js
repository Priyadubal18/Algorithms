/*Max and Second Max
Given an array arr[] of size N of positive integers which may have duplicates. The task is to find the maximum and second maximum from the array, and both of them should be distinct, so If no second max exists, then the second max will be -1.*/

// input is array and its size

function findMaxAndSeconMax(arr, size) {
    let max = Number.MIN_VALUE;
    let max2 = Number.MAX_VALUE;
    for (let i = 0; i < size; i++) {
        if (arr[i] > max) {
            max2 = max;
            max = arr[i];
        }
        else if (arr[i] > max2 && arr[i] !== max) {
            max2 = arr[i]
        }
    }

    if (max2 == Number.MIN_VALUE) {
        max2 = -1
    }

    console.log(max2);
    console.log(max);
}

findMaxAndSeconMax([1, 2, 3, 4, 5], 5);