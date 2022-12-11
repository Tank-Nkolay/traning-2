// вывести в консоль ===
// node src/components/dateUtils/http
const PORT = 8081;

const http = require('http');
const requestHandler = (request, response) => {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.end('<h1>GOIT</h1>');
};

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
