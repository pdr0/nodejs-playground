const sum = (number1, number2) => `Total: ${number1 + number2}`;

const number1 = process.argv[2];
const number2 = process.argv[3];

console.log(sum(parseInt(number1), parseInt(number2)));