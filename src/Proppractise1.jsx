import ReceivingProp from './Proppractise2';
import { useState } from 'react';

function Sendingprops() {
  var arraybox = ['Rohit', 'Abhishek', 'Amit', 'ganga'];

  const [name, setName] = useState('');
  return (
    <>
      <ReceivingProp names={arraybox} uploadname={name} />
      <h4>This is sending box 1 </h4>

      <button onClick={() => setName('Rohit')}>Update Name </button>
    </>
  );
}

export default Sendingprops;
