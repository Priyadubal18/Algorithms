function MeanMedianArray(arr) {
    arr.sort((a, b) => {
        return a - b;
    });

    let mean = 0;
    for (let i = 0; i < arr.length; i++) {
        mean += arr[i];
    }
    console.log("Mean", Math.floor(mean / arr.length));
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 == 0) {
        let midEarlier = mid - 1;
        let sum = (arr[mid] + arr[midEarlier]) / 2
        console.log("Median", Math.floor(sum));
    } else {
        console.log("Median", arr[mid]);
    }
}

MeanMedianArray([2, 8, 3, 4]);

