import { Link } from 'react-router';
export const UserList = () => {
  const users = [
    {
      id: 1,
      name: 'Rohit Sharma',
      email: 'rohit@example.com',
      age: 25,
      city: 'Delhi',
    },
    {
      id: 2,
      name: 'Priya Mehta',
      email: 'priya@example.com',
      age: 28,
      city: 'Mumbai',
    },
    {
      id: 3,
      name: 'Arjun Singh',
      email: 'arjun@example.com',
      age: 22,
      city: 'Jaipur',
    },
    {
      id: 4,
      name: 'Sneha Kapoor',
      email: 'sneha@example.com',
      age: 26,
      city: 'Pune',
    },
    {
      id: 5,
      name: 'Vikram Patel',
      email: 'vikram@example.com',
      age: 30,
      city: 'Ahmedabad',
    },
  ];

  return (
    <>
      {users.map((user) => (
        <>
          <h4>
            <Link to={'/users/' + user.id}>{user.name}</Link>
          </h4>
        </>
      ))}
    </>
  );
};
