import { useState } from 'react';
import Childone from './Stateupliftchildone';
import Childtwo from './Stateupliftchildtwo';
const Parentmajor = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Childone count={count} setCount={setCount} />
      <Childtwo count={count} setCount={setCount} />
    </>
  );
};
export default Parentmajor;
