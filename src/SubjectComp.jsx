import { useContext } from 'react';
import { SubjectData } from './ContextApiData';

export const SubjectComp = () => {
  const subject = useContext(SubjectData);
  return (
    <>
      <div style={{ backgroundColor: 'aliceblue', padding: 10 }}>
        <h4>Subject is : {subject}</h4>
      </div>
    </>
  );
};
