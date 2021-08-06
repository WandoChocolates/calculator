import React, { useState } from 'react';
import './style.css';

//styling <body> element
document.body.style = "padding: 0; margin: 0; background: linear-gradient(to right, #00AAFF, #00FF6C);";

export default function App() {
  const [previous, setPrevious] = useState('');
  const [current, setCurrent] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = e => {
    const value = e.target.value;
    switch (value){
      case 'AC':
        clear();
        break;
      case 'DEL':
        backspace();
        break;
      case '/':
        chooseOperation(value);
        break;
      case '*':
        chooseOperation(value);
        break;
      case '+':
        chooseOperation(value);
        break;
      case '-':
        chooseOperation(value);
        break;
      case '.':
        decimalNumber(value);
        break;
      case '=':
        calculate();
        break;
      default:
        setCurrent(current + value);
    }
  }

  const clear = () => {
    setPrevious('');
    setCurrent('');
  }

  const backspace = () => {
    setCurrent(current.slice(0, -1));
  }

  const chooseOperation = (value) => {
    if (current === '') return;
    if (previous !== '') {
      calculate();
    }
    setOperation(value);
    setPrevious(current);
    setCurrent('');
  }

  const decimalNumber = (value) => {
    if (value === '.' && current.includes('.')) return;
    setCurrent(current + value);
  }

  const calculate = () => {
    try{
      const result = eval(previous + operation + current);
      setCurrent(result);
    } catch(e){
      setCurrent('error')
    }
    setOperation('');
    setPrevious('');
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previous} {operation}</div>
        <div className="current-operand">{current}</div>
      </div>
      <button value="AC"  onClick={handleClick}className="span-two">AC</button>
      <button value="DEL" onClick={handleClick}>DEL</button>
      <button value="/" onClick={handleClick}>÷</button>
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="*" onClick={handleClick}>*</button>
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="+" onClick={handleClick}>+</button>
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="-" onClick={handleClick}>-</button>
      <button value="." onClick={handleClick}>.</button>
      <button value="0" onClick={handleClick}>0</button>
      <button value="=" onClick={handleClick} className="span-two">=</button>
    </div>
  );
}
