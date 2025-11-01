import { useState, useEffect } from 'react';

const EffectPractise = () => {
  const [countinc, setCountinc] = useState(0);
  const [countdesc, setCountdesc] = useState(100);

  const [display, setDisplay] = useState(0);
  const functionone = () => {
    console.log('Hi this is calling of the first function !!!');
  };

  const functiontwo = () => {
    console.log('Hi this is calling of the second function !!!');
  };
  // ISME ONE TIME CHALEGA // (Demount Lifecycle)
  // useEffect(() => {
  //   return () => {
  //     console.log('Unmount');
  //   };
  // }, []);

  // ISME EVERY TIME CHALEGA // (Mount Lifecycle)

  // useEffect(()=>{
  //   functionone();
  //   functiontwo();
  // })

  // ISME ONE TIME CHALEGA // (Update Lifecycle)

  // useEffect(()=>{
  //   functionone();
  //   functiontwo();
  // },[])

  // SIRF SPECIFIC STATE PE CHALEGA (Update Lifecycle)
  useEffect(() => {
    functionone();
    // functiontwo();
  }, [countinc]);

  return (
    <>
      <button onClick={() => setCountinc(countinc + 1)}>
        Increase : {countinc}
      </button>
      <button onClick={() => setCountdesc(countdesc - 1)}>
        Decrease : {countdesc}
      </button>
    </>
  );
};

export default EffectPractise;
