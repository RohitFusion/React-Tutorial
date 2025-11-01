import { Link } from 'react-router';
export const Navbar = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/user/about">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="/services">Services</Link>
      <Link to="/users">Users</Link>
      <Link to="/users/list">List</Link>
    </>
  );
};
