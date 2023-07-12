let birthMonths = new Map();
let numIndividuals = 50;

for (let i = 0; i < numIndividuals; i++) {
    let birthYear = Math.floor(Math.random() * 2) + 1992;
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    let key = `${birthMonth}-${birthYear}`;
    if (!birthMonths.has(key)) birthMonths.set(key, []);
    birthMonths.get(key).push(i);
}

for (let [key, individuals] of birthMonths) {
    console.log(`Birth month: ${key}`);
    console.log(`Individuals: ${individuals.join(', ')}`);
}
