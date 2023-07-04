const readLine = require("readline-sync");

function PowerOfTwo(n) {

    for(let i = 0; i <= n; i++) {

        let power = Math.pow(2, i);
        console.log(power);

    }

}

let num = readLine.question('Enter a number: ');
PowerOfTwo(num);