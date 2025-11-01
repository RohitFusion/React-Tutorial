import { useState } from 'react';
const UpdateArray = () => {
  const [studentarray, setStudentarray] = useState([
    'Rohit',
    'Irfan',
    'Ramesh',
  ]);

  const handleArrayUpdatenew = (name) => {
    // student.name = name;
    studentarray[0] = name;
    setStudentarray([...studentarray]);
  };

  // cons handleArrayUpdatenew
  return (
    <>
      <h3>{studentarray[0]}</h3>
      <input
        type="text"
        onChange={(event) => handleArrayUpdatenew(event.target.value)}
        Placeholder="Change Array Value"
      />
    </>
  );
};

export default UpdateArray;
