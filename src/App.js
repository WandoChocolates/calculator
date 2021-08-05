import React from 'react';
import './style.css';

//styling <body> element
document.body.style = "padding: 0; margin: 0; background: linear-gradient(to right, #00AAFF, #00FF6C);";

export default function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">143 +</div>
        <div className="current-operand">4561544444554546</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}
