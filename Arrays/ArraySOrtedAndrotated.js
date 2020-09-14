/*
Check if array is sorted and rotated 
Given an array arr[] of N distinct integers, check if this array is Sorted (non-increasing or non-decreasing) and Rotated counter-clockwise. Note that input array may be sorted in either increasing or decreasing order, then rotated.
A sorted array is not considered as sorted and rotated, i.e., there should be at least one rotation.

Example 1:

Input:
N = 4
arr[] = {3,4,1,2}
Output: Yes
Explanation: The array is sorted 
(1, 2, 3, 4) and rotated twice 
(3, 4, 1, 2).
*/

function isArraySortedAndRotated(arr) {
    // input is arr
    // find the min element and index in array
    let min = Number.MAX_VALUE;
    let minIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i]
        }
    }
    // check if element before min index are increasing order

    let isLeftBeforeMin = true;
    for (let i = 1; i < minIndex; i++) {
        if (arr[i - 1] > arr[i]) {
            isLeftBeforeMin = false;
            break;
        }
    }

    // check if element after index is in increasing order
    let isRightBeforeMin = true;
    for (let i = minIndex + 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            isRightBeforeMin = false;
            break;
        }
    }

    // check if the last element is less than the element before minIndex;
    let isGreaterThanMin = true;
    if (arr[arr.length - 1] > arr[minIndex - 1]) {
        isGreaterThanMin = false;
    }
    // output is bool

    return isGreaterThanMin && isLeftBeforeMin && isRightBeforeMin;
}

console.log(isArraySortedAndRotated([3, 2, 1, 2]));