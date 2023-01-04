// вывести в консоль =========
// node src/components/dateUtils/app
// ============================

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
// ============================
