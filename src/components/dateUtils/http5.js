// node src/components/dateUtils/http5
// вариант с ФРЕЙМВОРКОМ
const express = require('express');
const app = express();

const PORT = 8085;

// кастомный обработчик входящего запроса
// после выполнения запроса, покажет в консоле
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
  next();
});

app.get('/home', (req, res) => {
  res.json({ js: 'object' });
});

app.listen(PORT, error => {
  if (error) {
    console.error('Error at server launch', error);
  }
  console.log(`Server works at port ${PORT}!`);
});
