// node src/components/dateUtils/http4
// вариант с ФРЕЙМВОРКОМ
const express = require('express');
const app = express();

const PORT = 8084;

app.use((req, res) => {
  res.json({ js: 'object' });
  // если надо поставить статус в ручную
  //   res.status(500).json({ js: 'object' });
});

app.listen(PORT, error => {
  if (error) {
    console.error('Error at server launch', error);
  }
  console.log(`Server works at port ${PORT}!`);
});
