import React, { useState  } from "react";

const CounterComponent = () => {

  const [counter, setCounter] = useState(0);

  const resetHandler = () => {
    setCounter(0);
  }

  const decreaseHandler = () => {
    setCounter(counter - 1);
  }

  const increaseHandler = () => {
    setTimeout( function() {
      setCounter((oldValue) => {
        return oldValue + 1;
      })
    }, 2000)
  }


  return (
    <div>
      <h3>{counter}</h3>
      <div>
        <button className="button mx-2" onClick={ decreaseHandler }>Decrease</button>
        <button className="button mx-2" onClick={ increaseHandler }>Increase</button>
      </div>
      <button className="button reset-button my-2" onClick={ resetHandler }>Reset</button>
    </div>
  );
};

export default CounterComponent;
