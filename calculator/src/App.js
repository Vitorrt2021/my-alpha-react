import "./App.css";
import React, { useState } from "react";

function App() {
  const [result1, setResult1] = useState("");
  // const [calculator, setCalculator] = useState();
  const [value1, setValue1] = useState("Set Value");
  const [value2, setValue2] = useState("Set Value");
  const [operand1, setOperant1] = useState(1);
  const [operand2, setOperant2] = useState(1);

  function OperationButton({ classNa, funct, symbol }) {
    return (
      <>
        <button className={classNa} onClick={funct}>
          {" "}
          {symbol}{" "}
        </button>
      </>
    );
  }
  function NumberButton({ number }) {
    return (
      <>
        <button onClick={addNumberString} id={number}>
          {number}
        </button>
      </>
    );
  }
  const calculator = {
    _operation: undefined,

    getResult() {
      switch (this._operation) {
        case "add":
          return this._operand1 + this._operand2;
        case "subtract":
          return this._operand1 - this._operand2;
        case "multiply":
          return this._operand1 * this._operand2;
        case "divide":
          return this._operand1 / this._operand2;
        default:
          return false;
      }
    },
    clearCalculator() {
      this._operand1 = undefined;
      this._operand2 = undefined;
      this._operation = undefined;

      return {
        operand1: this._operand1,
        operand2: this._operand2,
        operation: this._operation,
      };
    },
  };
  function clearFields() {
    calculator.clearCalculator();
    setResult1("");
    setValue1("Set Value");
    setValue2("Set Value");
  }
  function addNumberString(e) {
    setResult1(result1 + e.target.id);
  }
  function add() {
    setOperant();

    calculator._operation = "add";
    setResult1(calculator.getResult());
  }
  function subtract() {
    setOperant();

    calculator._operation = "subtract";
    setResult1(calculator.getResult());
  }
  function multiply() {
    setOperant();

    calculator._operation = "multiply";
    setResult1(calculator.getResult());
  }
  function divide() {
    setOperant();

    calculator._operation = "divide";
    setResult1(calculator.getResult());
  }

  function setOperant() {
    calculator._operand1 = operand1;
    calculator._operand2 = operand2;
  }
  return (
    <div className="App">
      <section className="calculator">
        <p className="result">{result1}</p>

        <div className="buttons_setvalue">
          <button
            id="setValue1"
            onClick={() => {
              console.log(result1);
              setOperant1(result1);
              setValue1(result1);
              setResult1("");
            }}
          >
            {value1}
          </button>

          <button
            id="setValue2"
            onClick={() => {
              console.log(result1);
              setOperant2(result1);
              setValue2(result1);
              setResult1("");
            }}
          >
            {value2}
          </button>
        </div>

        <div className="container__buttons">
          <NumberButton number="7" />
          <NumberButton number="8" />
          <NumberButton number="9" />

          <OperationButton classNa="multiply" funct={multiply} symbol="x" />

          <NumberButton number="4" />
          <NumberButton number="5" />
          <NumberButton number="6" />

          <OperationButton classNa="divide" funct={divide} symbol="/" />

          <NumberButton number="1" />
          <NumberButton number="2" />
          <NumberButton number="3" />

          <button onClick={clearFields} class="clear">
            {" "}
            c<br />l<br />e<br />a<br />r{" "}
          </button>

          <OperationButton classNa="add" funct={add} symbol="+" />

          <NumberButton number="0" />

          <OperationButton classNa="subtract" funct={subtract} symbol="-" />
        </div>
      </section>
    </div>
  );
}

export default App;
