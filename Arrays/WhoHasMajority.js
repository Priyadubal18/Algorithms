/*Who has the majority?
We hope you are familiar with using counter variables. Counting allows us to find how may times a certain element appears in an array or list.

You are given an array arr[] of size N. You are also given two elements x and y. Now, you need to tell which element (x or y) appears most in the array. In other words, return the element, x or y, that has higher frequency in the array. If both elements have the same frequency, then just return the smaller element.

NOTE :  We need to return the elements, not their counts.

Example 1:

Input:
N = 11
arr[] = {1,1,2,2,3,3,4,4,4,4,5}
x = 4, y = 5
Output: 4
Explanation: n=11;
elements = {1,1,2,2,3,3,4,4,4,4,5};
x=4; y=5
x frequency in arr is = 4 times
y frequency in arr is = 1 times
x has higher frequency, so we print 4.
Example 2:

Input:
N = 8
arr[] = {1,2,3,4,5,6,7,8}
x = 1, y = 7
Output: 1
Explanation: n=8;
elements = {1,2,3,4,5,6,7,8};
x=1; y=7
x frequency in arr is 1 times
y frequency in arr is 1 times
both have same frequency, so
we look for the smaller element.
x=1 is smaller than y=7, so print 1.
Your Task:
You don't need to read input or print anything. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function majorityWins() that takes array, n, x, y as parameters and return the element with highest frequency.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).

Constraints:
1 <= n <= 103
0 <= arri , x , y <= 108
** For More Input/Output Examples Use 'Expected Output' option **
*/


function FindMajority(arr, x, y) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) count1++;
        if (arr[i] == y) count2++;
    }
    if (count1 >= count2)
        console.log(x);
    else
        console.log(y);
}

FindMajority([1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], 4, 5)