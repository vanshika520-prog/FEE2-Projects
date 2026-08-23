import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function increaseByFive() {
    setCount(count + 5);
  }

  function decreaseByFive() {
    setCount(count - 5);
  }

  return (
    <div className="counter-card">

      <h1>Counter</h1>

      <p className="counter-subtitle">
        Increase, decrease or reset your number
      </p>

      <div className="count-display">
        {count}
      </div>

      <div className="buttons">

        <button className="increment" onClick={increment}>
          +1
        </button>

        <button className="decrement" onClick={decrement}>
          -1
        </button>

        <button className="reset" onClick={reset}>
          Reset
        </button>

        <button className="increase-five" onClick={increaseByFive}>
          +5
        </button>

        <button className="decrease-five" onClick={decreaseByFive}>
          -5
        </button>

      </div>

    </div>
  );
}

export default Counter;