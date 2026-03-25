import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="counter-title">Counter: {count}</p>
      <input
        className="counter-input"
        type="number"
        value={1}
        onChange={(f) => f}
      />
    </>
  );
};

export default Counter;
