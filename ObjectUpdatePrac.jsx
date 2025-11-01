import { useState } from 'react';
const UpdateObj = () => {
  const [user, setUser] = useState({
    name: 'Rohit',
    age: 25,
    address: {
      city: 'Gurgaon',
      country: 'India',
    },
  });

  const objectchange = (name) => {
    setUser({ ...user, name: name });
  };
  const objectchangecity = (city) => {
    setUser({
      ...user, // parent copy
      address: {
        ...user.address, // nested copy
        city: city, // replace city
      },
    });
  };
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>
      <input
        type="text"
        onChange={(event) => objectchange(event.target.value)}
      />

      <input
        type="text"
        onChange={(event) => objectchangecity(event.target.value)}
      />
    </>
  );
};

export default UpdateObj;
