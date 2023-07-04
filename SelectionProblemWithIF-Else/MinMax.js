function MinMax() {
    let random = [...Array(5)].map(() => Math.floor(Math.random() * (999 - 100 + 1) + 100));

    console.log("Five random numbers: " + random);

    let Min = Math.min(...random);
    let Max = Math.max(...random);

    console.log("Minimum value: " + Min);
    console.log("Maximum Value: " + Max);
}

MinMax();