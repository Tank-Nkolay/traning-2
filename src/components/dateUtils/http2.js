// вывести в консоль ===
// node src/components/dateUtils/http2
const PORT = 8082;

// СИНХРОННЫЙ ЗАПРОС при начальном чтении
const http = require('http');
const fs = require('fs').promises;

// тоже но асинхронно при КАЖДОМ запросе
// ОТВЕТ === проверка на сервере через /
const requestHandler = async (request, response) => {
  // чтение файла через асинхронную операцию
  const manifest = await fs.readFile('./package.json', 'utf8');
  response.writeHead(200, { 'Content-type': 'text/json' });
  return response.end(manifest);
};

// ===============================================
// const fs = require('fs');
// const manifest = fs.readFileSync('./package.json', 'utf8');

// ОТВЕТ === проверка на сервере через /
// const requestHandler = (request, response) => {
//   response.writeHead(200, { 'Content-type': 'text/json' });
//   return response.end(manifest);
// };
// ===============================================
// ===============================================

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
