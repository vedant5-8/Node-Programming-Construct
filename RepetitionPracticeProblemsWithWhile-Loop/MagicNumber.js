const readLine = require("readline-sync");

function MagicNumber() {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let tries = 0;
    let userGuess;

    console.log('Random Number: ' + randomNumber);

    while (userGuess !== randomNumber) {
        userGuess = readLine.question('Enter your guess between 1 to 100: ');
        userGuess = Number(userGuess);
        tries++;

        if (userGuess < randomNumber) {
            console.log("Your guess is too low!");
        } 
        else if (userGuess > randomNumber) {
            console.log("Your guess is too high!");
        }
    }

    console.log("Congratulations! You guess the number is " + tries + " tries.");

}

MagicNumber();