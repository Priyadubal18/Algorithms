/*
Given an array arr[] of positive integers of size N. Reverse every sub-array of K group elements.
N = 5, K = 3
arr[] = {1,2,3,4,5}
Output: 3 2 1 5 4
Explanation: Reversing groups in size
k = 3, first group consists of elements
1, 2, 3. Reversing this group, we have
elements in order as 3, 2, 1.
*/

function reverseInGrp(arr, grp) {
    console.log("p")
    for (let i = 0; i < arr.length; i += grp) {
        let left = i;
        let right = Math.min(i + grp - 1, arr.length - 1)
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    console.log(arr);
}

reverseInGrp([1, 2, 3, 4, 5], 3);
/*
function reverseArray(arr) {
    let low = 0; let high = arr.length;
    while (low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }

*/