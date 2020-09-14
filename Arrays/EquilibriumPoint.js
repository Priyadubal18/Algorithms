/*
Given an array A of N positive numbers. The task is to find the first Equilibium Point in the array.
Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

Example 1:

Input:
N = 1
A[] = {6, 1, 2 , 2 , 2 }
Output: 1
Explanation: Since its the only
element hence its the only equilibrium
point.
*/

function getEquilibrium(arr) {
    let sum = 0;
    let lSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];
        if (sum == lSum) {
            return i;
            break;
        }
        lSum += arr[i]
    }
    return -1;
}

console.log('Equlibrium:', getEquilibrium([1]));
