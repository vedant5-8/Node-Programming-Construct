const arr = [];

for(let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (999 - 100 + 1) + 100)
}

console.log("Array: " + arr);

for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

let secondLargest = arr[arr.length - 2];
let secondSmallest = arr[1];

console.log("Second Largest Value is " + secondLargest);
console.log('Second Smallest Value is ' + secondSmallest);