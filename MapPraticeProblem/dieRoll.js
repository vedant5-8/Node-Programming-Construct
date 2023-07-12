let dieRolls = new Map();
let maxRolls = 10;
let maxNumber, minNumber;

while (true) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dieRolls.set(roll, (dieRolls.get(roll) || 0) + 1);
    if (dieRolls.get(roll) === maxRolls) break;
}

for (let [number, count] of dieRolls) {
    if (!maxNumber || count > dieRolls.get(maxNumber)) maxNumber = number;
    if (!minNumber || count < dieRolls.get(minNumber)) minNumber = number;
}

console.log(`Number reached maximum times: ${maxNumber}`);
console.log(`Number reached minimum times: ${minNumber}`);
