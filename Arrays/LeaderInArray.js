/*Leaders in an array
Given an array A of positive integers. Your task is to find the leaders in the array.

Note: An element of array is leader if it is greater than or equal to all the elements to its right side. Also, the rightmost element is always a leader.
Input:
N = 6
A[] = {16,17,4,3,5,2}
Output: 17 5 2
Explanation: The first leader is 17 
as it is greater than all the elements 
to its right.  Similarly, the next 
leader is 5. The right most element 
is always a leader so it is also 
included.
*/

function getLeaderInArray(arr) {
    let length = arr.length;
    let max = arr[length - 1];
    console.log(max);
    for (let i = length - 2; i >= 0; i--) {
        if (arr[i] > max) {
            max = arr[i];
            console.log(max);
        }
    }
}
getLeaderInArray([16, 17, 4, 3, 5, 2]);