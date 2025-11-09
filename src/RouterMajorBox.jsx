import { BrowserRouter, Routes, Route } from 'react-router';
import { RouterHome } from './RouterHomeComp';
import { RouterAbout } from './RouterAboutComp';
import { RouterContact } from './RouterContactComp';
import { Navbar } from './Navbar';
import { RouterNotFound } from './RouterNotFound';
import { RouterService } from './RouterService';
import { NestedServiceOne } from './NestedServiceOne';
import { NestedServiceTwo } from './NestedServiceTwo';
import { UserList } from './UserList';
import { UserDetail } from './UserDetail';
export const RouterMajorBox = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<RouterHome />}></Route>
        <Route path="/about" element={<RouterAbout />}></Route>

        {/* ROUTES PREFIXES */}
 
        <Route path="/user">
          <Route path="/user/about" element={<RouterAbout />}></Route>
        </Route>

        <Route path="/contact" element={<RouterContact />}></Route>

        {/* OPTIONAL SEGMENT */}
        <Route path="/users/list?" element={<UserList />}></Route>

        {/* DYNAMIC ROUTING */}
        <Route path="/users/:id" element={<UserDetail />}></Route>

        {/* EXMPLE OF NESTED ROUTING */}
        <Route path="/services" element={<RouterService />}>
          <Route path="serviceone" element={<NestedServiceOne />}></Route>
          <Route path="servicetwo" element={<NestedServiceTwo />}></Route>
        </Route>

        {/* NESTED ROUTING CODE  */}

        <Route path="/*" element={<RouterNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
