const readLine = require("readline-sync");

function ArithmeticOperations(a, b, c) {

    let Expr1 = a + b * c;
    let Expr2 = a % b + c;
    let Expr3 = c + a / b;
    let Expr4 = a * b + c;

    console.log("\nResult of Expression are: ");
    console.log("Expression 1: " + Expr1);
    console.log("Expression 2: " + Expr2);
    console.log("Expression 3: " + Expr3);
    console.log("Expression 4: " + Expr4);
    console.log();

    let Max, Min;

    if (Expr1 > Expr2) {
        Max = Expr1;
        Min = Expr2;
    }
    else {
        Max = Expr2;
        Min = Expr1;
    }

    if (Expr3 > Max) {
        Max = Expr3;
    } 
    else if (Expr3 < Min) {
        Min = Expr3;
    }

    if (Expr4 > Max) {
        Max = Expr4;
    } 
    else if (Expr4 < Min) {
        Min = Expr4;
    }

    console.log("Maximum Number: " + Max);
    console.log("Minimum Number: " + Min);

}

let num1 = readLine.question('Enter First Number: ');
let num2 = readLine.question('Enter Second Number: ');
let num3 = readLine.question('Enter Third Number: ');

ArithmeticOperations(num1, num2, num3);