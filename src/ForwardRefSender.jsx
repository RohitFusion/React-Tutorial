import { useRef } from 'react';
import RefReciever from './ForwardRefReciver';
const Refsender = () => {
  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = 'red';
  };
  return (
    <>
      <RefReciever updateInput={updateInput} ref={inputRef} />
    </>
  );
};
export default Refsender;
