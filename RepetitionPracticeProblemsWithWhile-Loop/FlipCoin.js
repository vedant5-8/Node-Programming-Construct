function FlipCoin() {

    let heads = 0;
    let tails = 0;

    while (heads < 11 && tails < 11) {

        let coinFlip = Math.floor(Math.random() * 2)

        if (coinFlip === 0) {
            heads++;
        }
        else {
            tails++;
        }
    }

    if (heads === 11) {
        console.log("Heads Win!!");
    }
    else {
        console.log("Tails Win!!");
    }
}

FlipCoin();