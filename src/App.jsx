import { useState } from "react";
import "./index.css"; 
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const reset = () => {
    setValue("");
  };

  const back = () => {
    setValue(value.slice(0, -1));
  };

  const evaluateExpression = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      console.error(`Erro: ${error}`);
    }
  };

  return (
    <>
    <div className="Title">
      <h1>Calculadora Simples</h1>
    </div>
    <div className="calculator">
      <input
        type="text"
        name="display"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="button-row">
        <button className="operator" onClick={() => setValue(value + "/")}>/</button>
        <button className="operator" onClick={() => setValue(value + "*")}>*</button>
        <button className="operator" onClick={() => setValue(value + "-")}>-</button>
        <button className="operator" onClick={() => setValue(value + "+")}>+</button>
      </div>

      <div className="button-row">
        <button onClick={() => setValue(value + "7")}>7</button>
        <button onClick={() => setValue(value + "8")}>8</button>
        <button onClick={() => setValue(value + "9")}>9</button>
      </div>

      <div className="button-row">
        <button onClick={() => setValue(value + "4")}>4</button>
        <button onClick={() => setValue(value + "5")}>5</button>
        <button onClick={() => setValue(value + "6")}>6</button>
      </div>

      <div className="button-row">
        <button onClick={() => setValue(value + "1")}>1</button>
        <button onClick={() => setValue(value + "2")}>2</button>
        <button onClick={() => setValue(value + "3")}>3</button>
      </div>

      <div className="button-row">
        <button onClick={() => setValue(value + "0")}>0</button>
        <button onClick={() => setValue(value + ".")}>.</button>
        <button className="special" onClick={reset}>C</button>
        <button className="special" onClick={back}>←</button>
      </div>

      <div className="button-row2">
        <button className="equals" onClick={evaluateExpression}>=</button>
      </div>
    </div>
    </>
  );
}

export default App