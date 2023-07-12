const arr = [];

for(let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (999 - 100 + 1) + 100)
}

console.log("Array: " + arr);

let MaxValue = arr[0];
let MinValue = arr[1];
let secondMax = 0;
let secondMin = 0;

for(let i = 0; i < arr.length; i++) {
    if (arr[i] > MaxValue) {
        secondMax = MaxValue;
        MaxValue = arr[i];
    }
    else if (arr[i] > secondMax && arr[i] != MaxValue) {
        secondMax = arr[i];
    }

    if (arr[i] < MinValue) {
        secondMin = MinValue;
        MinValue = arr[i];
    }
    else if (arr[i] < secondMin && arr[i] != MinValue) {
        secondMin = arr[i];
    }
}

console.log("Second Largest Value is " + secondMax);
console.log('Second Smallest Value is ' + secondMin);