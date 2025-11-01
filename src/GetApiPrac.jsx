import { useEffect, useState } from 'react';
export const GetApi = () => {
  useEffect(() => {
    fetchapidata();
  }, []);

  const [data, setData] = useState([]);
  async function fetchapidata() {
    const url = 'https://dummyjson.com/users';
    const response = await fetch(url);
    const data = await response.json();

    setData(data.users);
    // console.log(data.users);
  }
  return (
    <>
      {data.map((user, index) => (
        <p key={index}>{user.firstName}</p>
      ))}
    </>
  );
};
