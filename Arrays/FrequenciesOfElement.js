/*
Frequencies of Limited Range Array Elements
Given an array A[] of N positive integers which can contain integers from 1 to N where elements can be repeated or can be absent from the array. Your task is to count the frequency of all elements from 1 to N.

Input:
N = 5
A[] = {2,3,2,3,5}
Output: 0 2 2 0 1
Explanation:
Counting frequencies of each array element
We have:

*/

// input is number array. Assume all positive intgers
// output is same input array


function getFrequency(arr, range) {
    // get array in range
    for (let i = 0; i < range; i++) {
        arr[i] = arr[i] - 1;
    }
    debugger;


    // add the range to array index
    for (let i = 0; i < range; i++) {
        arr[arr[i] % range] = arr[arr[i] % range] + range;
    }

    console.log(arr);

    // Console log the frequncy
    for (let i = 0; i < range; i++) {
        let num = parseInt(arr[i] / range);
        console.log(`Frequncy of number ${i + 1} :`, num)
        arr[i] = arr[i] % range + 1;
    }

    console.log(arr);
}
getFrequency([2, 3, 2, 3, 5], 5);
//Time complexity :O(n)
// Space complexity :O(1);

