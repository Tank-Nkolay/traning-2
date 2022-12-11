// вывести в консоль ===
// node src/components/dateUtils/http
const PORT = 8081;

const http = require('http');

// ОТВЕТ 4 === проверка на сервере через /
const requestHandler = (request, response) => {
  if (request.url.indexOf('/home') >= 0) {
    response.writeHead(200, { 'Content-type': 'text/json' });
    return response.end(JSON.stringify({ url: 'homepage' }));
  }
  response.writeHead(200, { 'Content-type': 'text/json' });
  return response.end(JSON.stringify({ url: 'other' }));
};

// ОТВЕТ 3
// const requestHandler = (request, response) => {
//   response.writeHead(404, { 'Content-type': 'text/json' });
//   response.end(JSON.stringify({ a: 1, b: [] }));
// };

// ОТВЕТ 2
// const requestHandler = (request, response) => {
//   response.writeHead(200, { 'Content-type': 'text/json' });
//   response.end(JSON.stringify({ a: 1, b: [] }));
// };

// ОТВЕТ 1
// const requestHandler = (request, response) => {
//   response.writeHead(200, { 'Content-type': 'text/html' });
//   response.end('<h1>GOIT</h1>');
// };

const server = http.createServer(requestHandler);

// определяем порт для сервера
// функция запустится когда запустится сервер
// проверить можно еще на локал хост 8081
server.listen(PORT, error => {
  if (error) {
    console.error('Error at server launch', error);
  }
  console.log(`Server works at port ${PORT}!`);
});
