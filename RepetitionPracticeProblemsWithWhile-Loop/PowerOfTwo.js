const readLine = require("readline-sync");

function PowerOfTwo(n) {

    let i = 0;
    let powerOfTwo = 1;

    while (i <= n && powerOfTwo < 256) {
        powerOfTwo = Math.pow(2, i);
        console.log(powerOfTwo);
        i++;
    }

}

let num = readLine.question('Enter a number: ');
PowerOfTwo(num);