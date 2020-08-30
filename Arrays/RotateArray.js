/*
Given an unsorted array arr[] of size N, rotate it by D elements in the counter-clockwise direction.
Input:
N = 5, D = 2
arr[] = {1,2,3,4,5}
Output: 3 4 5 1 2
Explanation: 1 2 3 4 5  when rotated
by 2 elements, it becomes 3 4 5 1 2.
*/

function rotateArray(arr, d) {
    reverseArray(arr, 0, d - 1);
    reverseArray(arr, d, arr.length - 1);
    reverseArray(arr, 0, arr.length - 1);
}

function reverseArray(arr, l, r) {
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
let testArray = [1, 2, 3, 4, 5];
rotateArray(testArray, 2);
console.log(testArray)

/* clockwise first reverse the entire array then 0 to d and then d to n