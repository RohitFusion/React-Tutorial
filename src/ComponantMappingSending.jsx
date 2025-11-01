import ComponantMapping from './ComponantMappingReciving';

import { useState } from 'react';
import DigitalClock from './TimeComponant';

const ComponantSending = () => {
  const [color, setColor] = useState('pink');

  const userData = [
    {
      id: 1,
      name: 'Rohit',
      age: 25,
      city: 'Gurgaon',
      skills: ['React', 'Laravel', 'PHP'],
      hobbies: ['Cricket', 'Coding', 'Music'],
    },
    {
      id: 2,
      name: 'Amit',
      age: 28,
      city: 'Hyderabad',
      skills: ['JavaScript', 'Node.js', 'MongoDB'],
      hobbies: ['Movies', 'Travel', 'Gaming'],
    },
    {
      id: 3,
      name: 'Sneha',
      age: 24,
      city: 'Delhi',
      skills: ['Python', 'Django', 'AI'],
      hobbies: ['Reading', 'Cooking', 'Yoga'],
    },
  ];
  return (
    <>
      <h3>Reusing of the componant</h3>
      {userData.map((user) => (
        <div className="" key={user.id}>
          <ComponantMapping data={user} />
        </div>
      ))}

      <select
        defaultValue={color}
        onChange={(event) => setColor(event.target.value)}
      >
        <option value="red">Red</option>
        <option value="pink">Pink</option>
        <option value="blue">blue</option>
      </select>

      <DigitalClock color={color} />
    </>
  );
};
export default ComponantSending;
