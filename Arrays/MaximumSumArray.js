/*
Kadane's Algorithm
Given an array arr of N integers. Find the contiguous sub-array with maximum sum.

Example 1:

Input:
N = 5
arr[] = {1,2,3,-2,5}
Output: 9
Explanation: Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which
is a contiguous subarray.
Example 2:

Input:
N = 4
arr[] = {-1,-2,-3,-4}
Output: -1
Explanation: Max subarray sum is -1
of element (-1)
Your Task:
The task is to complete the function maxSubarraySum() which returns the sum of subarray with maximum sum.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).
*/

// Will use Kadane Algorithm. Find the Max_so_far and max_ending .

// Algorithm to work with positive integer
// set max_so_far =0; max_ending =0
// loop over the array;
// add array[i] in max_ending.
// if array is less than zero set max_ending to 0
// check max_so_far with max_ending.IF greater update max_so_far

function maxSubarraySum(arr) {
    let max_ending = 0; let max_so_far = 0;
    for (let i = 0; i < arr.length; i++) {
        max_ending = arr[i] + max_ending;
        if (max_ending < 0)
            max_ending = 0
        else if (max_so_far < max_ending) {
            max_so_far = max_ending;
        }
    }
    return max_so_far;
}

/*
// All negative numbers
function maxSubarraySum(arr) {
    let max_ending = arr[0]; let max_so_far = arr[0];
    for (let i = 1; i < arr.length; i++) {
        debugger;
        max_ending = Math.max(arr[i], arr[i] + max_ending);
        max_so_far = Math.max(max_so_far, max_ending)
    }
    return max_so_far;
}

*/
console.log(maxSubarraySum([1, 2, 3, -2, 5]));