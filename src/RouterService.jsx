import { NavLink, Outlet } from 'react-router';
export const RouterService = () => {
  return (
    <>
      <h5>This is Service Page</h5>
      <NavLink to="serviceone">SERVICE 1</NavLink>
      <NavLink to="servicetwo">SERVICE 2</NavLink>

      <Outlet />
    </>
  );
};
