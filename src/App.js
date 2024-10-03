import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  // 足し算の結果を取得する関数
  const calculateSum = async () => {
    const response = await fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1: Number(num1), num2: Number(num2) }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="App">
      <h1>React + Node.js 足し算プログラム</h1>
      <div>
        <input
          type="number"
          placeholder="1つ目の数字"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="2つ目の数字"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={calculateSum}>計算する</button>
      </div>
      {result !== null && (
        <div>
          <h2>結果: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
