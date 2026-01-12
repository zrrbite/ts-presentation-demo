import React, { useState } from "react";

// This component has multiple issues:
// 1. Double quotes instead of single (Prettier violation)
// 2. Implicit 'any' type on handler parameter (TypeScript error)
// 3. Inconsistent spacing (Prettier violation)

const Counter = () => {
  const [count,setCount]=useState(0);

  const handleClick = (e) => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
