// node src/components/dateUtils/http3

// вариант с ФРЕЙМВОРКОМ
const express = require('express');
const app = express();

const PORT = 8083;

app.get('/home', (req, res) => {
  res.send('get request');
});
app.post('/home', (req, res) => {
  res.send('post request');
});
app.delete('/home', (req, res) => {
  res.send('delete request');
});
// use для всех, если предыдущие не могут выполнится
// порядок имеет значение
app.use((req, res) => {
  res.send('middleware request');
});

// запрос на http://localhost:8083/home
// app.get('/home', (request, response) => {
//   response.sendStatus(200);
// });

app.listen(PORT, error => {
  if (error) {
    console.error('Error at server launch', error);
  }
  console.log(`Server works at port ${PORT}!`);
});
