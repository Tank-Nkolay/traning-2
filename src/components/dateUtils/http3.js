// node src/components/dateUtils/http3

// вариант с ФРЕЙМВОРКОМ
const express = require('express');
const app = express();

const PORT = 8083;

app.get('/home', (request, response) => {
  response.send('get request');
});
app.post('/home', (request, response) => {
  response.send('post request');
});
app.delete('/home', (request, response) => {
  response.send('delete request');
});
// use для всех, если предыдущие не могут выполнится
app.use('/home', (request, response) => {
  response.send('use request');
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
