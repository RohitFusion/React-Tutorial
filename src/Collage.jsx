import { Classcomp } from './ClassComp';
import { SubjectData } from './ContextApiData';
import { useState } from 'react';

export const Collage = () => {
  const [subject, setSubject] = useState('');
  return (
    <>
      <div style={{ backgroundColor: 'yellow', padding: 10 }}>
        <SubjectData.Provider value={subject}>
          <h4>Collage Componant</h4>
          <select
            defaultValue={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option value="maths">Maths</option>
            <option value="english">English</option>
            <option value="science">Science</option>
            <option value="computer Science">Computer Science</option>
          </select>

          <Classcomp />
        </SubjectData.Provider>
      </div>
    </>
  );
};
