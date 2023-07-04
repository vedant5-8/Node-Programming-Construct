let money = 100;
let goal = 200;
let bets = 0;
let win = 0;

while (money > 0 && money < goal) {
    
    let bet = Math.floor(Math.random() * 2);
    bets++;

    if(bet === 0) {
        money--;
    }
    else {
        money++;
        win++;
    }
}

console.log("Number of Bets: " + bets);
console.log("Number of Wins: " + win);

if (money === 0) {
    console.log("Gambler is broke.");
}
else {
    console.log("Gambler has reached the goal.");
}