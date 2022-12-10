const { getCurrentDate } = require('./DateUtils');

console.log(`get current date: ${getCurrentDate}`);

const Calc = require('calc-js').Calc;

// ==================
console.log(process.argv);
// const [, , a, b] = process.argv;
const a = process.argv[2];
const b = process.argv[3];

console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// node src/components/dateUtils/index

// ==================
// console.log(process.argv);
// console.log(new Calc(0.2).sum(0.1).finish());
// ==================
