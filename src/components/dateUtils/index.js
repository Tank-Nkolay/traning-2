const { getCurrentDate } = require('./DateUtils');

console.log(`get current date: ${getCurrentDate}`);

const Calc = require('calc-js').Calc;

console.log(process.argv);

console.log(new Calc(0.2).sum(0.1).finish());

// node src/components/dateUtils/index
