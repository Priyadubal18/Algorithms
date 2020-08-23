/*
Given an array arr[] of N positive integers. The task is to find the maximum for every adjacent pairs in the array.
N = 2
arr[] = {5, 5}
Output: 5
Explanation: We only have two elements
so max of 5 and 5 is 5 only.
*/

/*
function maximumAdjacent(arr, size) {
    for (let i = 0; i < size - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            console.log(arr[i + 1])
        } else {
            console.log(arr[i]);
        }
    }
}
*/


function maximumAdjacent(arr, size) {
    for (let i = 0, j = 1; i < size - 1 && j < size; i++ , j++) {
        console.log(Math.max(arr[i], arr[j]))
    }
}
maximumAdjacent([1, 2, 2, 3, 4, 5], 6)