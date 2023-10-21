const express = require('express');
const app = express();
const http = require('http').Server(app);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // 루트 경로에서 쇼핑몰 홈페이지를 직접 렌더링
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>쇼핑몰 홈</title>
    </head>
    <body>
      <h1>Welcome to our Shopping Mall</h1>
      <ul>
        <li>Product 1 - $10</li>
        <li>Product 2 - $20</li>
        <li>Product 3 - $30</li>
      </ul>
    </body>
    </html>
  `);
});

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
