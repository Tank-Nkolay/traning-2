// const { getCurrentDate } = require('./DateUtils');

// console.log(`get current date: ${getCurrentDate}`);

// const Calc = require('calc-js').Calc;
const path = require('path');
const fs = require('fs').promises;
// const fs = require('fs');

// вывести в консоль ===
// node src/components/dateUtils/index

// АСИНХРОННО прочитать содержимое файла ==================

// ВАРИАНТ 1 == ДОБАВИТЬ ТЕКСТ в файл === ПЕРЕИМЕНОВАТЬ
(async () => {
  try {
    const data = await fs.readFile(
      path.resolve('./src/components/dateUtils/date.txt'),
      'utf8'
    );
    console.log(data);

    // так можно ДОБАВИТЬ ТЕКСТ
    // const newContent = `${data} school`;
    // await fs.writeFile(
    //   path.resolve('./src/components/dateUtils/date.txt'),
    //   newContent,
    //   'utf8'
    // );

    // так можно ПЕРЕИМЕНОВАТЬ и ПЕРЕМЕСТИТЬ
    // await fs.rename(
    //   path.resolve('./src/components/dateUtils/dateUtils.js'),
    //   path.resolve('./src/components/dateUtils/dateNewUtils.js')
    // );

    // так можно УДАЛИТЬ ФАЙЛ
    // await fs.unlink(path.resolve('./src/components/dateUtils/date1.js'));

    // прочитать содержимое ДИРЕКТОРИИ
    console.log(await fs.readdir('./src/components/dateUtils'));
  } catch (error) {
    console.error(error);
  }
})();

// ВАРИАНТ 2
// fs.readFile(path.resolve('./src/components/dateUtils/date.txt'), 'utf8')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// ВАРИАНТ 3
// fs.readFile(
//   path.resolve('./src/components/dateUtils/date.txt'),
//   'utf8',
//   (error, data) => {
//     if (error) {
//       console.error(error);
//     }
//     console.log(data);
//   }
// );
// ====================================

// математика ==================
// console.log(process.argv);
// // const [, , a, b] = process.argv;
// const a = process.argv[2];
// const b = process.argv[3];
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// посмотреть АБСОЛЮТНЫЙ путь ==================
// console.log(path.resolve('dataUtils.js'));
// ==================

// ==================
// console.log(process.argv);
// console.log(new Calc(0.2).sum(0.1).finish());
// ==================
