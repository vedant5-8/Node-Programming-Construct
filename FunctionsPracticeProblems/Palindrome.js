const readLine = require('readline-sync');

function IsPalindrome(num) {

    let reversedNum = 0;
    let originalNum = num;

    while (num > 0) {
        
        reversedNum = (reversedNum * 10) + (num % 10);
        num = Math.floor(num / 10);

    }

    return originalNum === reversedNum;

}

let FirstNumber = readLine.question('Enter First Number: ');
FirstNumber = Number(FirstNumber);
let SecondNumber = readLine.question('Enter Second Number: ');
SecondNumber = Number(SecondNumber);

if (IsPalindrome(FirstNumber)) {
    console.log('\n' + FirstNumber + ' is palindrome number.');
} else {
    console.log('\n' + FirstNumber + ' is not palindrome number.');
}

if (IsPalindrome(SecondNumber)) {
    console.log('\n' + SecondNumber + ' is palindrome number.');
} else {
    console.log('\n' + SecondNumber + ' is not palindrome number.');
}