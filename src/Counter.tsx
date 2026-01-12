import { useState } from 'react';

// Now fixed:
// ✓ Single quotes (Prettier)
// ✓ Proper spacing (Prettier)
// ✓ No implicit 'any' types (TypeScript)

const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const handleClick = (): void => {
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
