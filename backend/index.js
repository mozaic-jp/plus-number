const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// CORS対応
app.use(cors());

// JSONのリクエストボディを解析
app.use(express.json());

// 足し算を行うAPIエンドポイント
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  res.json({ result });
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
