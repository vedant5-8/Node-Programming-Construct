
function FlipCoin() {

    let headsOrTails;

    if (Math.random() > 0.5) {
        headsOrTails = "Head";
    } else {
        headsOrTails = "Tail";
    }
    return headsOrTails;

}

console.log(FlipCoin());