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

function IsPrime(num) {

    if (num <= 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i == 0) {
            return false;
        }

    }
    return true;
}

let num = readLine.question('Enter a number: ');
num = Number(num);

if (IsPalindrome(num) && IsPrime(num)) 
{
    console.log(num + " is palindrome and prime number also.");
}
else if (IsPalindrome(num)) 
{
    console.log(num + " is palindrome number only.");
}
else if (IsPrime(num)) 
{
    console.log(num + " is prime number only.");
}
else 
{
    console.log(num + " is neither prime nor palindrome number.");
}