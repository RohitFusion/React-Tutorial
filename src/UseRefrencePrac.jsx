import { useRef } from 'react';

const RefrencePrac = () => {
  const inputRef = useRef(null);

  const inputHandler = () => {
    // console.log(inputRef);
    inputRef.current.focus();
  
  };

  return (
    <>
      <input type="text" ref={inputRef} placeholder="enter name" />
      <button onClick={inputHandler}>Focus On Input Field</button>
    </>
  );
};

export default RefrencePrac;
