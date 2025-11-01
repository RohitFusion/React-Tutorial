function JsxMapping() {
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
      <h3>Mapping Iteration </h3>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Skills</th>
            <th>Hobbies</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((users) => (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.age}</td>
              <td>{users.city}</td>
              <td>{users.skills.join(', ')}</td>
              <td>{users.hobbies.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default JsxMapping;
