import { useState } from 'react';

function ConditionCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {count == 0 ? (
        <h2>count</h2>
      ) : count == 1 ? (
        <h2>count 1</h2>
      ) : count == 2 ? (
        <h2>count 2</h2>
      ) : count == 3 ? (
        <h2>count 3</h2>
      ) : null}
    </>
  );
}

export default ConditionCounter;
