import { useState } from 'react';
function Inputpractise() {
  const [name, setName] = useState('Rohit Rao');

  return (
    <>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Name"
      />
      <h2>{name}</h2>
 
    </>
  );
}

export default Inputpractise;
