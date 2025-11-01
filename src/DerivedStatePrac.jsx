import { useState } from 'react';
const DerivedState = () => {
  // State variable //
  const [user, setUser] = useState();
  const [users, serUsers] = useState([]);

  const handleAddUser = () => {
    serUsers([...users, user]);
  };

  // Derived State Variable //

  const total = users.length;
  const lastInserted = users[users.length - 1];
  return (
    <>
      <h3>Total users : {total}</h3>
      <h3>Last User : {lastInserted}</h3>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>

      {users.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}
    </>
  );
};
export default DerivedState;
