const fs = require('fs');

const params = [...process.argv].slice(2).map(n => parseInt(n));

const sum = (...numbers) => {
    numbers.forEach((number, index) => {
        if (index > 0) {
            numbers[0] += number
        }
    });
    return numbers[0]
};

const result = sum(...params);

fs.writeFileSync('./logs/results.txt', result);
console.log(result);
