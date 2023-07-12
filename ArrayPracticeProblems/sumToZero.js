let arr = [0, -1, 2, -3, 1];

for(let i = 0; i < arr.length - 2; i++) {
    for(let j = i + 1; j < arr.length - 1; j++) {
        for(let k = i + 1; k < arr.length; i++) {
            if(arr[i] + arr[j] + arr[k] == 0) {
                console.log(arr[i], arr[j], arr[k]);
            }
        }
    }
}