import { forwardRef } from 'react';

const RefReciever = forwardRef(({ updateInput }, ref) => {
  return (
    <>
      <input type="text" ref={ref} placeholder="Enter something" />
      <button onClick={updateInput}>Ref Active</button>
    </>
  );
});

export default RefReciever;
