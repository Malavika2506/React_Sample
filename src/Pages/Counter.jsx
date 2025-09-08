import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0); // count is state
  const [name, setName] = useState();
  console.log(count);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count- 1);

  const reset = () => setCount(0)
  

  return (
    <div className="main">
      <h2 className="heading">Counter App </h2>
      <div className="counter-circle">
        <span className="counter">{count}</span>
      </div>
     <button onClick={increment} className="increasebtn">
  <i className="fa-solid fa-plus"></i>
</button>

      <button onClick={decrement} className="decreasebtn">
        <i class="fa-solid fa-minus"></i>
      </button>
      <br></br>
      <button onClick={reset} className="">
        <i class="fa-solid fa-clock-rotate-left"></i>
      </button>
    </div>
  );
}
export default Counter;
